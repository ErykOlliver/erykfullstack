"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { SolutionCardProps } from "../type/types"
import { Heading, Paragraph } from "@/src/shared/ui-kit/text"


export default function SolutionCard(props: SolutionCardProps) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 1 })

    return (
        <div ref={ref} className="perspective aspect-9/15 w-5/6 h-auto">
            <motion.div
                animate={{ rotateY: inView ? 180 : 0 }}
                transition={{ duration: 0.8 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full h-full"
            >
                <article className="absolute gap-5 w-full h-full p-2.5 shadow-sm shadow-black flex flex-col items-center justify-center backdrop-blur-xs backface-hidden bg-linear-to-b from-black-800 to-white/30 border-[0.5px] rounded-md border-white/70">
                    <div className="size-15 relative">
                        <Image src={props.icon} alt={`Icone - ${props.head_line}`} fill />
                    </div>
                    <Heading level={1} className="text-center text-white font-medium">{props.head_line}</Heading>
                </article>

                <article
                    className="absolute gap-5 overflow-y-auto w-full h-full px-4 py-2.5 shadow-[0_0_17.9px_5px] shadow-primary-500 flex flex-col items-center justify-start backdrop-blur-xs backface-hidden bg-linear-to-b from-black-600 to-white/60 border-[0.5px] rounded-md border-primary-500"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <header className="w-full items-center justify-between h-fit flex py-2.5">
                        <Heading level={2} className=" text-primary-500/30 font-bold">{props.n_position.toString().padStart(2, '0')}</Heading>
                        <div className="size-10 relative">
                            <Image src={props.icon} alt={`Icone - ${props.head_line}`} fill />
                        </div>
                    </header>
                    <article className="w-full border-b-[0.5px] pb-2 border-white flex items-start gap-1.5 flex-col justify-center">
                        <Heading level={1} className=" text-white font-medium ">{props.head_line}</Heading>
                        <Paragraph className=" text-soft-white font-normal wrap-break-word">{props.sub_head_line}</Paragraph>
                        <Paragraph className=" text-soft-white/70 font-light">{props.description}</Paragraph>
                    </article>
                    <div className="w-full flex flex-col gap-1.5">
                        {props.solution_list.map((s, i) => (
                            <div key={i} className="flex w-full gap-1 items-center justify-start">
                                <Check className="text-primary-500" />
                                <Paragraph className="text-white">{s}</Paragraph>
                            </div>
                        ))}
                    </div>
                </article>
            </motion.div>
        </div>
    )
}