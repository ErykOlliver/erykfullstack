import { NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import { BudgetPdf } from '@/src/shared/libs/budget-pdf'
import React from 'react';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { clientName, niche, description, valuation, paymentLink } = body;

        const stream = await renderToStream(
            <BudgetPdf
                clientName={clientName}
                niche={niche}
                description={description}
                valuation={Number(valuation)}
                paymentLink={paymentLink}
            />
        );
        const chunks: any[] = [];
        for await (const chunk of stream) {
            chunks.push(chunk);
        }
        const pdfBuffer = Buffer.concat(chunks);

        const headers = new Headers();
        headers.set('Content-Type', 'application/pdf');
        headers.set('Content-Disposition', `attachment; filename="Orcamento_${clientName.replace(/\s+/g, '_')}.pdf"`);

        return new NextResponse(pdfBuffer, { status: 200, headers });

    } catch (error) {
        console.error('Erro ao gerar arquivo PDF:', error);
        return NextResponse.json({ error: 'Erro ao gerar PDF' }, { status: 500 });
    }
}