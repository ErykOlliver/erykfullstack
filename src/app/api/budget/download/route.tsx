import { typeGetBudgetProps } from "@/src/modules/dashboard/budgets-and-payments/type";
import BudgetPdf from "@/src/shared/libs/budget-pdf/budget-pdf";
import { renderToStream } from "@react-pdf/renderer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body: typeGetBudgetProps = await request.json()

        const stream = await renderToStream(
            <BudgetPdf {...body} />
        );

        const chunks: any[] = [];
        for await (const chunk of stream) {
            chunks.push(chunk);
        }
        const pdfBuffer = Buffer.concat(chunks);

        const headers = new Headers();
        headers.set('Content-Type', 'application/pdf');
        headers.set('Content-Disposition', `attachment; filename="Orcamento_${body.clientName.replace(/\s+/g, '_')}.pdf"`);

        return new NextResponse(pdfBuffer, { status: 200, headers });

    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        return NextResponse.json({ error: 'Erro ao gerar PDF' }, { status: 500 });
    }
}