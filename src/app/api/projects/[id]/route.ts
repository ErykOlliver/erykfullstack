import { NextResponse } from 'next/server';
import { deleteProject } from '../../../../modules/projects';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;

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
