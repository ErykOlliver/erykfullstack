'use client'

import { typeMailProps } from '@/src/modules/mail/type'
import { postMail } from '@/src/shared/api/mail/mail'
import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import { ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { typeAlertProps, typeResultProps } from '../type'
import { useEffect, useState } from 'react'
import Alert from './alert'

export default function ContactForm() {
    const [alert, setAlert] = useState<typeAlertProps | null>(null)
    const { register, handleSubmit, reset } = useForm<typeMailProps>()

    const onSubmit = async (data: typeMailProps) => {
        try {
            const result: typeResultProps = await postMail(data)

            if (result.status === 'success') {
                setAlert({
                    title: 'Sucesso',
                    status: result.status,
                    message: result.message
                })
                reset()
            } else {
                setAlert({
                    title: 'Falha no envio',
                    status: result.status,
                    message: result.message
                })
            }

        } catch (error) {
            setAlert({
                title: 'Falha no envio',
                status: 'error',
                message: 'Falha no envio do E-mail. verifique sua conexão com a internet ou tente novamente mais tarde!'
            })
            console.log(error)
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
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full xl:h-fit xl:max-h-3/4 xl:w-full bg-white/50 items-start justify-center p-6 flex flex-col gap-3 border-white backdrop-blur-xs shadow-[0_0_2px] shadow-black/70 border rounded-md'
        >
            <Heading level={1} className='font-medium xl:w-1/2 md:text-2xl xl:text-4xl'>
                Preencha o formulário
            </Heading>

            <input
                type="text"
                placeholder="Nome"
                {...register('name')}
                className="w-full border rounded-md p-3 border-gray-300 focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500 transition"
            />

            <input
                type="email"
                placeholder="E-mail"
                {...register('mail')}
                className="w-full border rounded-md p-3 border-gray-300 focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500 transition"
            />

            <input
                type="tel"
                placeholder="Telefone"
                {...register('mail')}
                className="w-full border rounded-md p-3 border-gray-300 focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500 transition"
            />

            {alert && <Alert message={alert} />}

            <button
                type='submit'
                className='bg-linear-to-b hover:cursor-pointer shadow-[0_0_2px] shadow-black/70 font-poppins text-white font-medium w-full p-4 border rounded-lg from-yellow-500 to-primary-600 flex items-center justify-between'
            >
                Iniciar conversa <ArrowRight />
            </button>

        </form>
    )
}