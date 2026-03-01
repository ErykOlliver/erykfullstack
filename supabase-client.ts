import { createClient } from "@supabase/supabase-js/dist/index.cjs";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseApiKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export const supabase = createClient(supabaseUrl, supabaseApiKey)

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
