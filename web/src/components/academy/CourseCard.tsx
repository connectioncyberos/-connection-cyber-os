// Local: web/src/components/academy/CourseCard.tsx
'use client'

import { useState } from "react";
import { BookOpen, CheckCircle, ArrowRight, Award, Download } from "lucide-react";
import Link from "next/link";
import { CertificateModal } from "./CertificateModal";
import { issueCertificate } from "@/app/(academy)/cursos/actions";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  lessonsCount: number;
  progress: number;
  slug: string;
  isCompleted: boolean;
}

export function CourseCard({ id, title, description, lessonsCount, progress, slug, isCompleted }: CourseCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [certData, setCertData] = useState<{ studentName: string; authCode: string } | null>(null);

  /**
   * @description Aciona a emissão formal e abre o modal de visualização
   */
  async function handleIssueCertificate() {
    try {
      setLoading(true);
      const result = await issueCertificate(id);
      
      if (result.success) {
        setCertData({
          studentName: result.studentName,
          authCode: result.authCode
        });
        setShowModal(true);
      }
    } catch (error) {
      console.error("[CERTIFICATE_ERROR]:", error);
      alert("Erro ao emitir certificado. Verifique seu progresso.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500/30 flex flex-col h-full overflow-hidden">
        
        {/* Badge de Excelência */}
        {isCompleted && (
          <div className="absolute top-6 right-6 bg-emerald-500 text-white p-2.5 rounded-full shadow-lg shadow-emerald-200 animate-pulse">
            <Award size={20} />
          </div>
        )}

        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-slate-50 rounded-xl text-slate-400 group-hover:text-emerald-500 transition-colors">
              <BookOpen size={20} />
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              {lessonsCount} Lições
            </span>
          </div>

          <h3 className="text-2xl font-black text-slate-800 tracking-tighter mb-4 group-hover:text-emerald-600 transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-8">
            {description}
          </p>
        </div>

        <div className="mt-auto">
          {/* Barra de Progresso Técnico */}
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Status do Aluno</span>
            <span className="text-lg font-black text-slate-800 font-mono">{progress}%</span>
          </div>
          
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-6">
            <div 
              className={`h-full transition-all duration-1000 ease-out ${isCompleted ? 'bg-emerald-500' : 'bg-slate-800'}`}
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Ações Dinâmicas */}
          <div className="flex flex-col gap-3">
            {isCompleted ? (
              <button 
                onClick={handleIssueCertificate}
                disabled={loading}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase text-xs tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 disabled:opacity-50"
              >
                {loading ? (
                  "Processando..."
                ) : (
                  <>
                    <Download size={16} /> Baixar Certificado
                  </>
                )}
              </button>
            ) : (
              <Link 
                href={`/portal/watch/${slug}`}
                className="w-full py-4 bg-emerald-500 text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase text-xs tracking-widest hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100"
              >
                Continuar Aula <ArrowRight size={16} />
              </Link>
            )}
            
            {isCompleted && (
              <Link 
                href={`/portal/watch/${slug}`}
                className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-emerald-500 transition-colors"
              >
                Revisar Lições
              </Link>
            )}
          </div>
        </div>

        {/* DNA ConnectionCyberOS: Indicador Inferior */}
        <div className={`absolute bottom-0 left-0 h-1 transition-all duration-700 ${isCompleted ? 'bg-emerald-500 w-full' : 'bg-slate-200 w-0 group-hover:w-1/2'}`} />
      </div>

      {/* Injeção do Modal de Certificado */}
      {showModal && certData && (
        <CertificateModal 
          courseTitle={title}
          studentName={certData.studentName}
          authCode={certData.authCode}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}