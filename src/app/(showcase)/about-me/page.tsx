'use client'

import Footer from '@/src/modules/showcase/components/footer/page'
import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCards, EffectCoverflow, EffectCube, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

const avatars = [
    { image: '/erykolliver.png' },
    { image: '/erykolliver2.jpg' },
]


export default function AboutPage() {
    return (
        <div className="bg-white text-slate-900">
            <section className="relative min-h-[60vh] font-poppins flex items-center bg-zinc-950 overflow-hidden">
                <div className="container mx-auto px-6 z-20">
                    <div className="max-w-2xl">
                        <span className="text-orange-500 font-mono mb-4 block uppercase tracking-widest">Descubra a trajetória</span>
                        <Heading level={1} className="text-5xl md:text-7xl font-black text-white leading-tight">
                            QUEM É <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-primary-500">
                                ERYK OLLIVER?
                            </span>
                        </Heading>
                    </div>
                </div>
                <div className="absolute right-0 top-0 w-full h-full md:w-1/2 opacity-40 md:opacity-100">
                    <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/20 to-transparent z-10" />
                    <Swiper
                        modules={[Autoplay, EffectFade]}
                        effect="fade"
                        slidesPerView={1}
                        loop
                        speed={1200}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        fadeEffect={{ crossFade: true }}
                        allowTouchMove={false}
                        className="w-full h-full"
                    >
                        {avatars.map((a, i) => (
                            <SwiperSlide key={i}>
                                <Image
                                    alt='eryk olliver'
                                    src={a.image}
                                    fill
                                    className="object-cover rounded-xl"
                                    priority={i === 0}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className="py-20 container mx-auto px-6 font-poppins">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

                    <div className="md:col-span-7 space-y-12">
                        <div>
                            <Heading level={1} className="xl:text-3xl font-bold mb-4 flex items-center gap-2">
                                <span className="w-8 h-0.5 bg-orange-500"></span> O início de tudo
                            </Heading>
                            <Paragraph className="xl:text-lg text-slate-600 leading-relaxed">
                                Desde cedo, criar sempre foi algo natural para mim. Eu desmontava brinquedos,
                                reaproveitava peças e inventava mundos — não por brincadeira, mas pela necessidade de
                                entender como as coisas funcionavam.
                            </Paragraph>
                        </div>

                        <div>
                            <Heading level={1} className="xl:text-3xl font-bold mb-4 flex items-center gap-2">
                                <span className="w-8 h-0.5 bg-orange-500"></span> Evolução Digital
                            </Heading>
                            <Paragraph className="xl:text-lg text-slate-600 leading-relaxed">
                                Antes da programação, veio o design e o audiovisual. Criar mods para Minecraft e GTA
                                me trouxe a pergunta: <span className="italic text-orange-600">"E se eu criar o meu?"</span>.
                                Ali a curiosidade virou construção.
                            </Paragraph>
                        </div>
                    </div>

                    <div className="md:col-span-5 md:sticky md:top-32 space-y-6">
                        <div className="p-8 bg-zinc-50 border border-zinc-200 rounded-2xl shadow-sm">
                            <Heading level={1} className="xl:text-xl font-bold mb-6">Meus 3 Pilares</Heading>
                            <ul className="space-y-4">
                                {[
                                    { t: "Código Estruturado", d: "Arquitetura limpa e escalável." },
                                    { t: "Interfaces Claras", d: "Design focado na experiência do usuário." },
                                    { t: "Visão de Produto", d: "Tecnologia que resolve problemas reais." }
                                ].map((pilar, i) => (
                                    <li key={i} className="flex flex-col">
                                        <span className="font-bold text-orange-600 uppercase text-xs xl:text-sm tracking-tighter">{pilar.t}</span>
                                        <span className="text-slate-500">{pilar.d}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}