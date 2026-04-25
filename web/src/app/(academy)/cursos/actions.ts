// Local: web/src/app/(academy)/cursos/actions.ts
'use server'

import { createClient } from '@/utils/supabase/server'

/**
 * @description Busca a listagem de cursos integrando a contagem de lições 
 * e o progresso real do usuário logado para cálculo de percentual.
 */
export async function getAcademyCoursesWithProgress() {
  const supabase = await createClient()
  
  // Verificação de Identidade
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return []

  // 1. Busca cursos, lições vinculadas e o progresso do usuário logado
  const { data: courses, error } = await supabase
    .from('courses')
    .select(`
      id,
      title,
      description,
      slug,
      course_lessons (id),
      user_progress (lesson_id)
    `)
    .eq('user_progress.user_id', user.id)

  if (error) {
    console.error('[ACADEMY_PROGRESS_ERROR]:', error.message)
    return []
  }

  // 2. Processamento da Lógica de Percentual
  return courses.map(course => {
    const totalLessons = course.course_lessons?.length || 0;
    const completedLessons = course.user_progress?.length || 0;
    
    const progressPercentage = totalLessons > 0 
      ? Math.round((completedLessons / totalLessons) * 100) 
      : 0;

    return {
      id: course.id,
      title: course.title,
      description: course.description,
      slug: course.slug,
      lessonsCount: totalLessons,
      progress: progressPercentage,
      isCompleted: progressPercentage === 100
    }
  })
}

/**
 * @description Verifica elegibilidade e registra formalmente a emissão do certificado
 */
export async function issueCertificate(courseId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error("Não autorizado")

  const { data: progress } = await supabase
    .from('user_progress')
    .select('lesson_id')
    .eq('user_id', user.id)
    .eq('course_id', courseId)

  const { data: lessons } = await supabase
    .from('course_lessons')
    .select('id')
    .eq('course_id', courseId)

  if (!lessons || progress?.length !== lessons.length) {
    throw new Error("Curso ainda não concluído totalmente.")
  }

  const authCode = `ADB-${courseId.slice(0, 4)}-${user.id.slice(0, 4)}`.toUpperCase()

  const { data, error } = await supabase
    .from('certificates')
    .insert({
      user_id: user.id,
      course_id: courseId,
      auth_code: authCode
    })
    .select()
    .single()

  if (error) throw error

  return { 
    success: true, 
    authCode: data.auth_code,
    studentName: user.user_metadata?.full_name || "Membro ADBRAS"
  }
}