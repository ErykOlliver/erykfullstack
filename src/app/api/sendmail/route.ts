import { typeMailProps } from "@/src/modules/mail/type";
import { sendMail } from "@/src/shared/libs/email";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body: typeMailProps = await req.json()

    try {

        if (!body.name) {
            return NextResponse.json({
                status: 'warning',
                message: 'Falha no envio do E-mail. nome é obrigatório.',
            }, { status: 401 })
        }

        if (!body.mail) {
            return NextResponse.json({
                status: 'warning',
                message: 'Falha no envio do E-mail. e-mail é obrigatório.',
            }, { status: 401 })
        }

        const mail = await sendMail({ name: body.name, mail: body.mail, phone: body.phone })

        if (!mail) {
            return NextResponse.json({
                status: 'error',
                message: 'Falha no envio do E-mail. verifique sua conexão com a internet ou tente novamente mais tarde!',
            }, { status: 500 })
        }

        return NextResponse.json({
            status: 'success',
            message: 'E-mail enviado com sucesso! retornamos em até 24h',
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            status: 'error',
            message: 'Falha no envio do E-mail. verifique sua conexão com a internet ou tente novamente mais tarde!',
            error: error
        }, { status: 500 })
    }
}