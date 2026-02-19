"use client"

import { Heading } from "@/app/_components/ui-kit/text"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"


export default function SolutionCard() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 1 })

    return (
        <div ref={ref} className="perspective aspect-9/16 w-4/5 h-auto">
            <motion.div
                animate={{ rotateY: inView ? 180 : 0 }}
                transition={{ duration: 0.8 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full h-full"
            >
                <article className="absolute w-full h-full p-2.5 shadow-sm shadow-black flex flex-col items-center justify-center backdrop-blur-xs backface-hidden bg-linear-to-b from-black-800 to-white/30 border-[0.5px] rounded-md border-white/70">
                    <Heading level={1} className="text-center">Desenvolimento Web</Heading>
                </article>

                <div
                    className="absolute w-full h-full backface-hidden bg-blue-500"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    Verso
                </div>
            </motion.div>
        </div>
    )
}