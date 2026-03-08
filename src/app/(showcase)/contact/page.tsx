import Footer from '@/src/modules/showcase/components/footer/page'
import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import Contact from '@/src/modules/showcase/components/contact/page'

export default function ContactRoute() {
    return (
        <section className='w-full flex flex-col items-start justify-center h-fit '>
            <article className='w-full h-fit pb-25 px-10 pt-35 bg-linear-to-r from-primary-700 via-orange-500 to-orange-400 text-white flex flex-col items-center justify-center gap-2.5'>
                <Heading level={1} className='md:text-2xl uppercase font-black text-center'>Vamos conversar sobre seu projeto!</Heading>
                <Paragraph className='xl:w-1/2 text-center md:text-md'>
                    Tem uma ideia que pode virar um software de impacto? Estou pronto para ouvir e transformar sua ideia em realidade. vamos discutir como escalar seu negócio
                </Paragraph>
            </article>
            <Contact />
            <Footer />
        </section>
    )
}
