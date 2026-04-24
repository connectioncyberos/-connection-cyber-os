'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  // Recebe dados do formulário
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // 1. Execução do Login via Supabase Auth (Capturando 'data' para leitura de Claims)
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    // Retorna erro para exibir na tela conforme estrutura original
    return { error: error.message }
  }

  // Se der certo, revalida o layout global antes do redirecionamento
  revalidatePath('/', 'layout')

  // 2. RECUPERAÇÃO DE CLAIMS (Inteligência de Redirecionamento do Core)
  const userContext = data.user?.app_metadata?.context || 'academy'

  // --- INJEÇÃO DE RASTREABILIDADE (DEBUG) ---
  console.log('--- ACTION LOGIN DEBUG ---')
  console.log('Usuário Logado:', email)
  console.log('Contexto Detectado:', userContext)

  // 3. DESVIO DE FLUXO CONTEXTUAL (Salto Forçado para Contornar Cache de Middleware)
  if (userContext === 'cidadania') {
    console.log('>>> EXECUTANDO SALTO FORÇADO: /portal-cidadania')
    return redirect('/portal-cidadania')
  }

  if (userContext === 'os_admin') {
    return redirect('/dashboard')
  }

  // Fallback padrão para o Academy
  return redirect('/portal')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Tenta criar conta
  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    return { error: error.message }
  }

  // Se der certo, revalida e manda pro Portal padrão conforme validado anteriormente
  revalidatePath('/', 'layout')
  redirect('/portal')
}