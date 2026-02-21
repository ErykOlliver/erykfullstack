import { deleteNetwork } from '@/src/modules/network';
import { NextResponse } from 'next/server';

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {

        const { id } = await params;

        await deleteNetwork(Number(id));

        return NextResponse.json(
            { status: 'success', message: 'Rede Social deletada' },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { status: 'error', message: 'Erro ao deletar Rede Social', error },
            { status: 500 }
        );
    }
}
