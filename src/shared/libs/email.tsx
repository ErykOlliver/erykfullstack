import 'dotenv/config'
import { Resend } from 'resend';
import MailTemplate from '../../modules/mail/page'
import { typeMailProps } from '@/src/modules/mail/type';

export async function sendMail({ mail, message, name }: typeMailProps) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
        from: 'Portfólio <contato@contact.erykolliver.com.br>',
        to: "contato.erykolliver@gmail.com",
        replyTo: mail,
        subject: 'Cliente pelo portfólio',
        react: <MailTemplate name={name} mail={mail} message={message} />
    });

    return data;
}