// Local: web/src/app/(academy)/cursos/page.tsx
import { CourseCard } from "@/components/academy/CourseCard";
import { getAcademyCoursesWithProgress } from "./actions";

/**
 * @description Vitrine Academy V2 - Integrada com Percentual de Progresso
 */
export default async function AcademyCoursesPage() {
  // Chamada da função correta conforme definido no Módulo 49.1
  const courses = await getAcademyCoursesWithProgress();

  return (
    <div className="h-full w-full max-w-7xl mx-auto flex flex-col py-10 px-6 bg-white font-sans overflow-y-auto">
      
      {/* Header Fixo: Identidade Academy */}
      <div className="mb-12">
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
          Explorar <span className="font-light text-slate-400 uppercase text-3xl">Cursos</span>
        </h1>
        <p className="mt-2 text-lg text-slate-500 font-medium tracking-tight">
          <span className="font-black text-slate-700">ACADEMY</span> - ADBRAS MADUREIRA PIRACICABA • Centro de Formação
        </p>
      </div>

      {/* Grid de Cursos Dinâmica */}
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {courses.map((course) => (
            <CourseCard 
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description || "Sem descrição."}
              lessonsCount={course.lessonsCount}
              progress={course.progress}
              slug={course.slug}
              isCompleted={course.isCompleted}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-40 border-2 border-dashed border-slate-100 rounded-[3rem]">
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">
            Nenhum curso matriculado ou disponível
          </p>
        </div>
      )}

    </div>
  );
}