import { deleteSkill } from '@/src/modules/skills/services/delete-skill';
import { NextResponse } from 'next/server';

export async function DELETE(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {

        const { id } = await context.params

        await deleteSkill(Number(id));

        return NextResponse.json(
            { status: 'success', message: 'Skill deletada' },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { status: 'error', message: 'Erro ao deletar skill', error },
            { status: 500 }
        );
    }
}
