'use server'

import { revalidatePath } from "next/cache";
import * as ProjectModel from '../model'
import { typeProjectProps } from '../type'
import { uploadFile } from "@/supabase-client";
import { ProjectCategory, Status } from "@/src/generated/prisma/enums";

export const createProject = async (data: FormData) => {
  try {
    const title = data.get('title') as string;
    const posterFile = data.get('poster') as File;
    const skillsRaw = data.get('skills') as string;
    const skills = JSON.parse(skillsRaw) as string[];

    const slug = title
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    if (!posterFile) throw new Error("Poster é obrigatório");
    const uploadResult = await uploadFile(posterFile);
    const posterUrl = uploadResult.url.publicUrl;

    const projectData: typeProjectProps = {
      title,
      slug,
      poster: posterUrl,
      description: data.get('description') as string,
      github: (data.get('github') as string) || undefined,
      page: (data.get('page') as string) || undefined,
      designer: (data.get('designer') as string) || "",
      designerPage: (data.get('designerPage') as string) || "",
      applicationType: (data.get('applicationType') as string) || "",
      isFeatured: data.get('isFeatured') === 'true',
      status: data.get('status') as Status,
      category: data.get('category') as ProjectCategory,
      skills: skills
    };

    const project = await ProjectModel.create(projectData)

    revalidatePath('/dashboard')
    revalidatePath('/');

    return { status: 'success' }

  } catch (error) {
    console.error("Erro no Service:", error);
    return { status: 'error', error: "Erro desconhecido ao salvar projeto" };
  }
}


