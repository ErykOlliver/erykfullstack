import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import prisma from '@/src/shared/libs/prisma';

const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN!
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { clientName, valuation } = body;

        if (!valuation || isNaN(valuation)) {
            return NextResponse.json({ error: 'Valor inválido' }, { status: 400 });
        }

        const preference = new Preference(client);

        const mpResponse = await preference.create({
            body: {
                items: [
                    {
                        id: 'projeto-web',
                        title: ` 'Desenvolvimento' - || 'Sistema Web'`,
                        quantity: 1,
                        unit_price: Number(valuation),
                        currency_id: 'BRL',
                    }
                ],
                metadata: {
                    client_name: clientName,
                },
                payment_methods: {
                    excluded_payment_types: [
                        { id: 'ticket' }
                    ],
                }
            }
        });

        const newTrade = await prisma.tradeIn.create({
            data: {
                clientName: clientName,
                valuation: Number(valuation),
                generatedLink: mpResponse.init_point!, 
            }
        });

        return NextResponse.json({
            paymentLink: mpResponse.init_point,
            vendaId: newTrade.id
        });

    } catch (error) {
        console.error('Erro ao gerar link de pagamento:', error);
        return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
    }
}