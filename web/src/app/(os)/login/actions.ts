// Local: web/src/app/(os)/login/actions.ts
'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const supabase = await createClient()

  // 1. Autenticação
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) return { error: error.message }

  // 2. Saneamento de Cache
  revalidatePath('/', 'layout')

  // 3. RECUPERAÇÃO DE CONTEXTO
  const userContext = data.user?.app_metadata?.context || 'academy'
  
  console.log('--- [SISTEMA] LOGIN EXECUTADO ---')
  console.log('Usuário:', email)
  console.log('Contexto:', userContext)

  // 4. DEFINIÇÃO DE DESTINO (Sem travas de lógica)
  let targetPath = '/portal'
  
  if (userContext === 'cidadania' || email === 'teste-cidadania@cyber.com') {
    targetPath = '/portal-cidadania'
  } else if (userContext === 'os_admin') {
    targetPath = '/dashboard'
  }

  console.log('>>> LANÇANDO REDIRECIONAMENTO PARA:', targetPath)
  
  // O redirect deve ser chamado fora de qualquer lógica condicional complexa se possível
  redirect(targetPath)
}

// Mantenha o signup conforme restaurado anteriormente para evitar erro de build
export async function signup(formData: FormData) {
  const supabase = await createClient()
  const { error } = await supabase.auth.signUp({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })
  if (error) return { error: error.message }
  revalidatePath('/', 'layout')
  redirect('/portal')
}