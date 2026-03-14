import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function uploadFile(file: File) {
  const fileExt = file.name.split('.').pop()
  const fileName = `${crypto.randomUUID()}.${fileExt}`

  const { data, error } = await supabase
    .storage
    .from('uploads')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    })

  if (error) {
    console.error('Erro no upload:', error)
    throw new Error(error.message)
  }

  const { data: publicUrlData } =
    supabase.storage.from('uploads').getPublicUrl(data.path)

  return {
    url: publicUrlData
  }
}