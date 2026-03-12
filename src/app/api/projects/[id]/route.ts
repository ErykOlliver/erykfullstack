import { deleteProject } from '@/src/modules/projects/services/delete-project';
import { NextResponse } from 'next/server';

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params


    await deleteProject(id);

    return NextResponse.json(
      { status: 'success', message: 'Projeto deletado' },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: 'error', message: 'Erro ao deletar projeto', error },
      { status: 500 }
    );
  }
}
