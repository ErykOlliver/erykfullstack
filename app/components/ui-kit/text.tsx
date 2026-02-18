import { JetBrains_Mono, Poppins } from 'next/font/google'

const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const fonts = {
    jetbrains: jetbrains.className,
    poppins: poppins.className
}

type font = keyof typeof fonts

type headingProps = {
    level:  1 | 2 | 3 | 4 | 5 | 6
    children?: React.ReactNode
    className?: string
}

export function Heading(props: headingProps) {
    const render = () => {
        switch (props.level) {
            case 1:
                return (
                    <h1 className={`text-xl ${poppins.className} ${props.className}`}>{props.children}</h1>
                )
            case 2:
                return (
                    <h2 className={`text-2xl ${poppins.className} ${props.className}`}>{props.children}</h2>
                )
            case 3:
                return (
                    <h3 className={`text-3xl ${poppins.className} ${props.className}`}>{props.children}</h3>
                )
            case 4:
                return (
                    <h4 className={`text-4xl ${poppins.className} ${props.className}`}>{props.children}</h4>
                )
            case 5:
                return (
                    <h5 className={`text-5xl ${poppins.className} ${props.className}`}>{props.children}</h5>
                )
            case 6:
                return (
                    <h6 className={`text-6xl ${poppins.className} ${props.className}`}>{props.children}</h6>
                )
        }
    }
    return render()
}

type paragraphProps = {
    children?: React.ReactNode
    className?: string,
    font?: font
}

export function Paragraph({ font, className, children }: paragraphProps) {
    return <p className={`text-xs ${className} ${font ? fonts[font] : poppins.className}`} >{children}</p>
}