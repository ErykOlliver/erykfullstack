import 'dotenv/config'
import { Resend } from 'resend';
import MailTemplate from '../../modules/mail/page'

export async function sendMail() {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
        from: 'contato@contact.erykolliver.com.br',
        to: 'erykolliver@gmail.com',
        subject: 'Teste de envio',
        react: <MailTemplate name='' mail='' message='' />
    });

    console.log("Resposta do Resend:", data);
    return data;
}

sendMail()