import { generatePaymentLink } from '@/src/shared/api/payments/generate-payment';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        if (!body.valuation || isNaN(body.valuation)) {
            return NextResponse.json({ error: 'Valor inválido' }, { status: 400 });
        }

        const paymentLink = await generatePaymentLink(body)
        return NextResponse.json({ paymentLink });

    } catch (error) {
        return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
    }
}