import { CircularProgress, TextField } from '@mui/material'
import { Key, ShieldUser } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useEffect, useState } from 'react'
import { typeAlertProps } from '../type'
import Alert from './alert'

export default function AuthForm() {
    const [login, setLogin] = useState("")
    const [key, setKey] = useState("")
    const [alert, setAlert] = useState<typeAlertProps | null>(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    async function SignIn(e: FormEvent) {
        e.preventDefault()
        setAlert(null)

        if (!login || !key) {
            setAlert({
                title: "Alerta",
                message: "Preencha todos os campos",
                status: 'warning'
            })
            return
        }

        setLoading(true)

        try {
            const res = await signIn("credentials", {
                admin: login,
                key,
                redirect: false,
            })

            if (res?.error) {
                setAlert({
                    title: "Erro",
                    message: "Admin ou senha incorretos",
                    status: 'error'
                })
                setLoading(false)
            } else if (res?.ok) {
                router.push("/dashboard")
                router.refresh()
                setLoading(false)

            }
        } catch (error) {
            setAlert({ title: 'Erro', message: 'Ocorreu um erro inesperado. Tente novamente.', status: 'error' })
            setLoading(false)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (alert === null) return
            setAlert(null)
        }, 3000)

        return () => clearInterval(interval)
    })


    return (
        <div className='xl:max-w-xl w-full flex flex-col gap-6'>
            <form className='w-full  items-start justify-start rounded-lg flex flex-col gap-3'>
                <TextField
                    id="outlined-basic"
                    fullWidth
                    onChange={(e) => setLogin(e.target.value)}
                    label="Admin"
                    variant="outlined"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#d9d9d9',
                            },
                            '&:hover fieldset': {
                                borderColor: '#d9d9d9',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ff6a00',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#555555',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#ff6a00',
                        },
                    }}
                />

                <TextField
                    id="outlined-basic"
                    fullWidth
                    onChange={(e) => setKey(e.target.value)}
                    label="Chave"
                    variant="outlined"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#d9d9d9',
                            },
                            '&:hover fieldset': {
                                borderColor: '#d9d9d9',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ff6a00',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#555555',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#ff6a00',
                        },
                    }}
                />
            </form>
            <button onClick={SignIn} className="w-full hover:cursor-pointer group relative overflow-hidden font-medium transition-all duration-300 rounded-md bg-black-800 text-white font-poppins text-lg py-3">
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Entrar'}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-linear-to-r from-transparent via-white/60 to-transparent skew-x-12" />
            </button>
            {alert && (
                <Alert message={alert} />
            )}
        </div>
    )
}
