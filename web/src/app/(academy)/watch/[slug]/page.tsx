// Local: web/src/app/(academy)/watch/[slug]/page.tsx
import { getCourseWatchData, toggleLessonProgress } from "./actions";
import { ChevronLeft, Play, CheckCircle2, Lock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface WatchPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ aula?: string }>;
}

export default async function WatchPage({ params, searchParams }: WatchPageProps) {
  const { slug } = await params;
  const { aula: currentLessonId } = await searchParams;
  
  const courseData = await getCourseWatchData(slug);

  if (!courseData) notFound();

  const currentLesson = currentLessonId 
    ? courseData.lessons.find((l: any) => l.id === currentLessonId)
    : courseData.lessons[0];

  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* 40% ESQUERDA: LISTA DE AULAS */}
      <div className="w-[40%] h-full flex flex-col border-r border-white/5 bg-[#0f0f0f]">
        <div className="p-6 border-b border-white/5">
          <Link href="/portal/cursos" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4 text-xs font-bold uppercase tracking-widest">
            <ChevronLeft size={16} /> Voltar para Cursos
          </Link>
          <h1 className="text-xl font-black tracking-tighter leading-tight">{courseData.title}</h1>
          <div className="mt-2 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-[15%] shadow-[0_0_8px_#10b981]" />
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-2">
          {courseData.lessons.map((lesson: any, index: number) => {
            const isActive = currentLesson?.id === lesson.id;
            return (
              <Link 
                key={lesson.id}
                href={`/portal/watch/${slug}?aula=${lesson.id}`}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all border ${
                  isActive 
                    ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-500' 
                    : 'bg-white/5 border-transparent hover:bg-white/10 text-slate-400'
                }`}
              >
                <span className="text-xs font-black opacity-30">{(index + 1).toString().padStart(2, '0')}</span>
                <p className="text-sm font-bold truncate flex-grow">{lesson.title}</p>
                {isActive ? <Play size={16} fill="currentColor" /> : <CheckCircle2 size={16} className="opacity-20" />}
              </Link>
            );
          })}
        </div>
      </div>

      {/* 60% DIREITA: PLAYER E AÇÃO */}
      <div className="w-[60%] h-full flex flex-col overflow-y-auto">
        <div className="w-full aspect-video bg-black flex items-center justify-center relative shadow-2xl">
          {currentLesson ? (
            <div className="w-full h-full flex items-center justify-center bg-slate-900 group">
               <Play size={80} className="text-white/20 group-hover:text-emerald-500 transition-all" strokeWidth={1} />
            </div>
          ) : (
            <div className="text-center">
              <Lock size={48} className="mx-auto text-slate-700 mb-4" />
              <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Selecione uma lição</p>
            </div>
          )}
        </div>

        <div className="p-10 max-w-3xl">
          <h2 className="text-3xl font-black tracking-tighter mb-6">{currentLesson?.title}</h2>
          <div className="text-slate-400 leading-relaxed font-medium mb-12">
            {currentLesson?.content || "Sem descrição."}
          </div>
          
          {currentLesson && (
            <form action={async () => {
              'use server'
              await toggleLessonProgress(currentLesson.id, courseData.id, slug)
            }}>
              <button 
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-8 py-4 rounded-2xl transition-all uppercase text-xs tracking-widest flex items-center gap-2"
              >
                <CheckCircle2 size={18} /> Marcar como Concluída
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}