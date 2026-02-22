'use client'

import { FormEvent, useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Key, ShieldUser } from "lucide-react"
import { Input } from "@mui/material"
import { Heading } from "@/src/shared/ui-kit/text"


export default function Login() {
    const [login, setLogin] = useState("")
    const [key, setKey] = useState("")
    const router = useRouter()


    async function SignIn(e: FormEvent) {
        e.preventDefault()
        const res = await signIn("credentials", {
            admin: login,
            key,
            redirect: true,
            callbackUrl: '/dashboard/'
        })

        if (res?.ok) {
            router.push("/dashboard/")
        } else {
            console.log("login mal sucedido")
        }
    }

    return (
        <div className="flex justify-center items-center w-screen gap-5 h-screen flex-col">
            <div className="flex flex-col items-center gap-5">
                <Image src={'/eo-logo.svg'} loading='eager' className='pointer-events-none size-8 select-none' width={30} height={30} alt='Triangle Logo' />
                <Heading level={1} className="text-primary select-none">Login</Heading>
            </div>
            <form onSubmit={SignIn} className="flex flex-col w-1/6 h-fit gap-3.5 bg-cards p-3 border border-border">
                <label htmlFor="login" className="flex gap-1.5 justify-start items-center text-default w-full"><ShieldUser /> Login</label>
                <Input id="login" className="bg-white" onChange={(e) => setLogin(e.target.value)} />
                <label htmlFor="key" className="flex gap-1.5 justify-start items-center text-default w-full"><Key /> Chave</label>
                <Input type="password" id="key" className="bg-white" onChange={(e) => setKey(e.target.value)} />
                <button className="w-full rounded-md">Entrar</button>
            </form>
        </div>
    )
}
