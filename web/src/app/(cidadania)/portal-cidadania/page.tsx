// Local: web/src/app/(cidadania)/portal-cidadania/page.tsx
"use client";

import { useState, useEffect } from "react";
import { CockpitCard } from "@/components/cidadania/CockpitCard";
import { ReportTable } from "@/components/cidadania/Reports";
import { getDashboardStats } from "./actions";
import { 
  LayoutDashboard, 
  Wallet, 
  Users, 
  GraduationCap, 
  ArrowUpRight,
  Loader2,
  Download
} from "lucide-react";

/**
 * @description Dashboard Master V6 - Viewport Optimized & Clean Data Grid
 * @version 6.0.0
 */
export default function CidadaniaPage() {
  const [activeReport, setActiveReport] = useState<'cursos' | 'parceiros' | 'cadastros'>('cursos');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    async function loadStats() {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("[ERRO_CONEXAO]", error);
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white">
        <Loader2 className="animate-spin text-cidadania-primary" size={48} />
      </div>
    );
  }

  const studentCount = stats?.studentCount || 0;
  const scholarshipCount = stats?.scholarshipCount || 0;
  const partnersCount = stats?.partnersCount || 0;
  const totalVagas = stats?.totalVagas || 0;
  const courseCount = stats?.courseCount || 0;

  return (
    <div className="h-screen w-full max-w-7xl mx-auto flex flex-col py-2 bg-white text-cidadania-text font-sans overflow-hidden">
      
      {/* HEADER COMPACTO */}
      <div className="mb-4 text-center">
        <h1 className="text-6xl font-extrabold text-slate-900 tracking-tighter">
          Dashboard <span className="font-light text-slate-400 uppercase text-4xl">MASTER</span>
        </h1>
        <p className="mt-1 text-lg text-slate-500 font-medium tracking-tight">
          <span className="font-black text-slate-700">CIDADANIA</span> - ADBRAS MADUREIRA PIRACICABA • Gestão Integrada
        </p>
      </div>

      {/* GRID DE CARDS - CENTRALIZAÇÃO E SUBIDA */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mb-4">
        
        <CockpitCard title="Portal do Aluno" subtitle="Educação & Carreira" isSpecial icon={<GraduationCap size={24} />}>
          <div className="flex flex-col items-center justify-center py-1">
            <div className="text-4xl font-black text-slate-800 tracking-tighter">{studentCount}</div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Matrículas Ativas</p>
          </div>
          <button 
            onClick={() => setActiveReport('cursos')}
            className="w-full mt-4 bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white font-black py-3 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-[0_4px_0_0_#10b981] active:shadow-none active:translate-y-1 uppercase text-xs tracking-widest"
          >
            Cursos Disponíveis <ArrowUpRight size={18} />
          </button>
        </CockpitCard>

        <CockpitCard title="Financeiro" subtitle="Social & Doações" icon={<Wallet size={24} />}>
          <div className="flex flex-col items-center justify-center py-1">
            <div className="text-2xl font-bold text-slate-700 font-mono tracking-tight">
              R$ {(studentCount * 150).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">Projeção Base: R$ 150/aluno</p>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mt-6">
            <div className="h-full bg-cidadania-primary w-3/4 transition-all duration-1000 shadow-[0_0_8px_rgba(37,99,235,0.3)]" />
          </div>
        </CockpitCard>

        <CockpitCard title="Governança" subtitle="Controle de Acesso" icon={<LayoutDashboard size={24} />}>
          <div className="flex flex-col gap-3">
            <div onClick={() => setActiveReport('cadastros')} className="flex flex-col items-center cursor-pointer group">
              <span className="font-bold text-cidadania-primary text-2xl">{scholarshipCount}</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest group-hover:text-cidadania-primary transition-colors">Bolsistas Ativos</span>
            </div>
            <div className="flex flex-col items-center border-t border-slate-100 pt-2">
              <span className="font-bold text-slate-700 text-lg">{partnersCount}</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Parceiros</span>
            </div>
          </div>
        </CockpitCard>

        <CockpitCard title="Empregabilidade" subtitle="Banco de Talentos" icon={<Users size={24} />}>
          <div className="flex flex-col items-center justify-center py-1 text-center">
            <div className="text-4xl font-black text-slate-800 tracking-tighter">{totalVagas}</div>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Vagas Acumuladas</p>
          </div>
          <button 
            onClick={() => setActiveReport('parceiros')}
            className="w-full mt-4 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold py-3 rounded-xl text-[10px] transition-all uppercase tracking-widest"
          >
            Analisar Parceiros
          </button>
        </CockpitCard>

      </div>

      {/* ÁREA DE DADOS - QUADRO ÚNICO COM BORDAS PADRONIZADAS E SCROLL INTERNO */}
      <div className="px-6 flex-grow overflow-hidden mb-4">
        <div className="h-full flex flex-col border border-slate-200 rounded-[2rem] bg-white shadow-sm overflow-hidden">
          
          {/* HEADER ÚNICO DO QUADRO - UNIFICANDO TÍTULO E CSV (IMAGEM 1) */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-xl font-black text-slate-800 uppercase tracking-tighter">
              {activeReport === 'cursos' ? "Engajamento de Cursos (DB)" : "Empresas por Segmento"}
            </h2>
            <button className="flex items-center gap-2 bg-white border border-slate-200 hover:border-cidadania-primary text-slate-500 hover:text-cidadania-primary px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm">
              <Download size={14} /> Exportar CSV
            </button>
          </div>

          {/* ÁREA DE SCROLL INTERNA (IMAGENS 3 E 4) */}
          <div className="flex-grow overflow-y-auto custom-scrollbar">
            {activeReport === 'cursos' && stats?.coursesList && (
              <ReportTable title="" headers={["Título do Curso", "Slug Identificador", "Status"]}>
                {stats.coursesList.map((course: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-50/30 transition-colors border-b border-slate-50 last:border-0">
                    <td className="px-8 py-5 font-bold text-slate-700">{course.title}</td>
                    <td className="px-8 py-5 text-slate-400 font-mono text-[10px] uppercase">{course.slug}</td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[9px] font-black uppercase tracking-widest">Publicado</span>
                    </td>
                  </tr>
                ))}
              </ReportTable>
            )}

            {activeReport === 'parceiros' && stats?.partnersList && (
              <ReportTable title="" headers={["Empresa", "Segmento", "Vagas Disponíveis"]}>
                {stats.partnersList.map((partner: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-50/30 transition-colors border-b border-slate-50 last:border-0">
                    <td className="px-8 py-5 font-bold text-slate-700">{partner.name}</td>
                    <td className="px-8 py-5 text-slate-500 text-xs">{partner.segment}</td>
                    <td className="px-8 py-5 font-bold text-cidadania-primary font-mono text-lg">{partner.vagas_abertas}</td>
                  </tr>
                ))}
              </ReportTable>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}