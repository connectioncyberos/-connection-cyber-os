// Local: web/src/app/(academy)/watch/[slug]/actions.ts
'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

/**
 * @description Busca detalhes do curso e lições para o Player em uma única query
 */
export async function getCourseWatchData(slug: string) {
  const supabase = await createClient()

  const { data: course, error } = await supabase
    .from('courses')
    .select(`
      id,
      title,
      description,
      course_lessons (
        id,
        title,
        content,
        order_index
      )
    `)
    .eq('slug', slug)
    .single()

  if (error || !course) {
    console.error('[WATCH_DATA_ERROR]:', error?.message)
    return null
  }

  // Ordenar as lições pelo índice de ordem (Manutenção de Integridade)
  const sortedLessons = course.course_lessons.sort((a: any, b: any) => a.order_index - b.order_index)

  return {
    ...course,
    lessons: sortedLessons
  }
}

/**
 * @description Alterna o estado de conclusão de uma lição (Toggle: Inserir ou Remover)
 * @param lessonId ID da lição a ser alterada
 * @param courseId ID do curso para referência de progresso
 */
export async function toggleLessonProgress(lessonId: string, courseId: string) {
  const supabase = await createClient()
  
  // Captura o usuário logado via Supabase Auth
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error("Não autorizado")

  // Tenta localizar o progresso existente para determinar a ação (Delete ou Insert)
  const { data: existing } = await supabase
    .from('user_progress')
    .select('id')
    .eq('user_id', user.id)
    .eq('lesson_id', lessonId)
    .single()

  if (existing) {
    // Se já existir, remove (Comportamento: Uncheck)
    await supabase.from('user_progress').delete().eq('id', existing.id)
    
    // Injeção de Revalidação para atualizar a UI do aluno
    revalidatePath(`/portal/watch/${lessonId}`) 
    return { completed: false }
  } else {
    // Se não existir, insere o novo progresso (Comportamento: Check)
    await supabase.from('user_progress').insert({
      user_id: user.id,
      lesson_id: lessonId,
      course_id: courseId
    })

    // Injeção de Revalidação para atualizar a UI do aluno
    revalidatePath(`/portal/watch/${lessonId}`)
    return { completed: true }
  }
}