// Local: web/src/app/(cidadania)/portal-cidadania/page.tsx
import { CockpitCard } from "@/components/cidadania/CockpitCard";
import { LayoutDashboard, Wallet, Users, GraduationCap, ArrowUpRight } from "lucide-react";

export default function CidadaniaPage() {
  return (
    <div className="h-full w-full max-w-7xl mx-auto flex flex-col justify-center py-6 bg-white text-cidadania-text font-sans">
      
      {/* HEADER DE GOVERNANÇA: Títulos Fixos e Padronizados conforme solicitado */}
      <div className="mb-12 text-center">
        <h1 className="text-6xl font-extrabold text-slate-900 tracking-tighter">
          Dashboard <span className="font-light text-slate-400 uppercase text-4xl">Master</span>
        </h1>
        <p className="mt-3 text-lg text-slate-500 font-medium tracking-tight">
          <span className="font-black text-slate-700">CIDADANIA</span> - ADBRAS MADUREIRA PIRACICABA • Gestão Integrada
        </p>
      </div>

      {/* GRID DE CARDS: Todos com borda fina e efeito 3D */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        
        {/* CARD ACADEMY: Botão sempre visível com sombra emerald */}
        <CockpitCard 
          title="Portal do Aluno" 
          subtitle="Educação & Carreira"
          isSpecial
          icon={<GraduationCap size={24} />}
        >
          <div className="mb-6">
            <div className="text-4xl font-black text-slate-800 tracking-tighter">1.250</div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Alunos Matriculados</p>
          </div>
          <button className="w-full bg-cidadania-action hover:bg-emerald-700 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-100 uppercase text-xs tracking-[0.1em] active:scale-95">
            Acessar Área de Estudos <ArrowUpRight size={18} />
          </button>
        </CockpitCard>

        {/* CARD FINANCEIRO */}
        <CockpitCard 
          title="Financeiro" 
          subtitle="Social & Doações"
          icon={<Wallet size={24} />}
        >
          <div className="text-2xl font-bold text-slate-700 font-mono tracking-tight">R$ 45.280,00</div>
          <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">+ 12% este mês</p>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mt-4">
            <div className="h-full bg-cidadania-primary w-3/4 transition-all duration-1000" />
          </div>
        </CockpitCard>

        {/* CARD GOVERNANÇA */}
        <CockpitCard 
          title="Governança" 
          subtitle="Controle de Acesso"
          icon={<LayoutDashboard size={24} />}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-slate-50 pb-2">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Bolsistas</span>
              <span className="font-bold text-cidadania-primary text-lg">85</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-50 pb-2">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Pagantes</span>
              <span className="font-bold text-slate-700 text-lg">1.165</span>
            </div>
            <p className="text-[9px] text-slate-400 font-mono text-center bg-slate-50 py-1 rounded-lg">Ambiente Hospitalar Validado ✅</p>
          </div>
        </CockpitCard>

        {/* CARD EMPREGABILIDADE */}
        <CockpitCard 
          title="Empregabilidade" 
          subtitle="Banco de Talentos"
          icon={<Users size={24} />}
        >
          <div className="text-4xl font-black text-slate-800 tracking-tighter">12</div>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1 mb-6">Vagas em Aberto</p>
          <button className="w-full border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold py-3 rounded-xl text-[10px] transition-all uppercase tracking-widest">
            Gerenciar Vagas
          </button>
        </CockpitCard>

      </div>
    </div>
  );
}