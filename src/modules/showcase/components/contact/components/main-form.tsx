'use client'

import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import { TextareaAutosize, TextField } from '@mui/material'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function ContactForm() {
    return (
        <form className='w-full bg-white/50 p-6 flex flex-col gap-3 border-white backdrop-blur-xs  shadow-[0_0_2px] shadow-black/70 border rounded-md'>
            <Heading level={1} className='font-medium'>Preencha o formulário </Heading>
            <TextField
                id="outlined-basic"
                fullWidth
                label="Nome completo"
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
                        color: '#000',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#ff6a00',
                    },
                }}
            />

            <TextField
                id="outlined-basic"
                fullWidth
                label="E-mail"
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
                        color: '#000',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#ff6a00',
                    },
                }}
            />
            <TextareaAutosize
                minRows={4}
                className="w-full border rounded-md p-3 border-gray-300 focus:outline-none focus:border-none focus:placeholder:text-primary-500 focus:ring focus:ring-primary-500 transition"
                placeholder="Gostaria de um sistema"
            />
            <button className='bg-linear-to-b shadow-[0_0_2px] shadow-black/70 text-white font-medium w-full p-4 border rounded-lg from-yellow-500  to-primary-600 flex items-center justify-between'>Iniciar conversa <ArrowRight /></button>
            <Paragraph className='text-center underline'>Retorno em até 24h úteis</Paragraph>
        </form>
    )
}
