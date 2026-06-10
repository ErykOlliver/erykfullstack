import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import prisma from '@/src/shared/libs/prisma';
import { typePaymentProps } from '@/src/shared/api/payments/type';

const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN!
});

export async function POST(request: Request) {
    try {
        const body: typePaymentProps = await request.json();
        const { valuation, projectName, id } = body;

        if (!valuation || isNaN(valuation)) {
            return NextResponse.json({ error: 'Valor inválido' }, { status: 400 });
        }

        const preference = new Preference(client);

        const mpResponse = await preference.create({
            body: {
                items: [
                    {
                        id: id,
                        title: projectName,
                        quantity: 1,
                        unit_price: Number(valuation),
                        currency_id: 'BRL',
                    }
                ],
                metadata: {
                    id
                },
                payment_methods: {
                    excluded_payment_types: [
                        { id: 'ticket' }
                    ],
                }
            }
        });

        return NextResponse.json({
            paymentLink: mpResponse.init_point,
        });

    } catch (error) {
        console.error('Erro ao gerar link de pagamento:', error);
        return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
    }
}