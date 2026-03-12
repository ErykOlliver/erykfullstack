import 'dotenv/config'
import { Resend } from 'resend'
import { ClientTemplate, LeadTemplate } from '../../modules/mail/page'
import { typeMailProps } from '@/src/modules/mail/type'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendMail({ mail, phone, name }: typeMailProps) {

    const [leadEmail, clientEmail] = await Promise.all([

        resend.emails.send({
            from: "Eryk Olliver <contato@contact.erykolliver.com.br>",
            to: "contato.erykolliver@gmail.com",
            replyTo: mail,
            subject: `Novo contato - ${name}`,
            react: <LeadTemplate name={name} mail={mail} phone={phone} />,
            text: `
Novo contato pelo site

Nome: ${name}
Email: ${mail}
Telefone: ${phone}
`
        }),

        resend.emails.send({
            from: "Eryk Olliver <contato@contact.erykolliver.com.br>",
            to: mail,
            subject: "Recebemos seu contato",
            react: <ClientTemplate name={name} mail={mail} phone={phone} />,
            text: `
Olá ${name},

Recebemos sua mensagem pelo site.

Em até 24 horas você receberá um retorno com mais informações.

Obrigado pelo contato.

— Eryk Olliver
`
        })

    ])

    console.log("Lead email:", leadEmail)
    console.log("Client email:", clientEmail)

    return { success: true }
}