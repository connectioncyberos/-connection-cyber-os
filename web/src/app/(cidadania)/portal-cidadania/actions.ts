// Local: web/src/app/(cidadania)/portal-cidadania/actions.ts
'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function getDashboardStats() {
  const supabase = await createClient()

  // Forçar bypass de cache para garantir dados frescos
  revalidatePath('/portal-cidadania')

  // 1. Contagem Total de Alunos
  const { count: studentCount, error: err1 } = await supabase
    .from('course_enrollments')
    .select('*', { count: 'exact', head: true })

  // 2. Contagem de Cursos
  const { count: courseCount, error: err2 } = await supabase
    .from('courses')
    .select('*', { count: 'exact', head: true })

  // 3. Parceiros e Vagas
  const { data: partners, error: err3 } = await supabase
    .from('partners')
    .select('vagas_abertas')

  const totalVagas = partners?.reduce((acc, p) => acc + (p.vagas_abertas || 0), 0) || 0
  const partnersCount = partners?.length || 0

  // 4. Bolsistas
  const { count: scholarshipCount, error: err4 } = await supabase
    .from('course_enrollments')
    .select('*', { count: 'exact', head: true })
    .eq('access_type', 'scholarship')

  // 5. Listagens para Tabelas
  const { data: coursesList } = await supabase
    .from('courses')
    .select('title, slug')
    .limit(10)

  const { data: partnersList } = await supabase
    .from('partners')
    .select('name, segment, vagas_abertas')
    .limit(10)

  // Debug Log (Verificável no terminal do VS Code, não no navegador)
  if (err1 || err2 || err3) {
    console.error("ERRO SUPABASE:", { err1, err2, err3 });
  }

  return {
    studentCount: studentCount || 0,
    courseCount: courseCount || 0,
    totalVagas,
    partnersCount,
    scholarshipCount: scholarshipCount || 0,
    coursesList: coursesList || [],
    partnersList: partnersList || []
  }
}