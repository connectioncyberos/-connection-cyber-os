// Local: web/src/app/page.tsx
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, GraduationCap, Users } from "lucide-react";

/**
 * @description Home Pública (Landing Page) - Foco em Conversão e Marketing
 * @version 1.0.0
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* NAVBAR DE CONVERSÃO */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 p-1.5 rounded-lg text-white">
              <ShieldCheck size={24} />
            </div>
            <span className="font-black text-xl tracking-tighter uppercase">Connection<span className="text-emerald-500">Cyber</span></span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-emerald-600 transition-colors">
              Entrar
            </Link>
            <Link href="/auth/signup" className="bg-slate-900 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200">
              Começar Agora
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION: O IMPACTO */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-7xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
            Educação & <br />
            <span className="text-emerald-500 italic">Cidadania</span> Digital.
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            A plataforma oficial da <span className="font-bold text-slate-800">ADBRAS Madureira Piracicaba</span> para capacitação profissional, gestão social e banco de talentos.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="/cursos" className="w-full md:w-auto bg-emerald-500 text-white px-10 py-5 rounded-[2rem] text-sm font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-200 flex items-center justify-center gap-3">
              Explorar Cursos <ArrowRight size={20} />
            </Link>
            <Link href="#saiba-mais" className="w-full md:w-auto border-2 border-slate-100 text-slate-500 px-10 py-5 rounded-[2rem] text-sm font-black uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center">
              Como Funciona
            </Link>
          </div>
        </div>
      </section>

      {/* GRID DE VALOR: O QUE ENTREGAMOS */}
      <section className="py-20 bg-slate-50 px-6" id="saiba-mais">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
            <div className="bg-emerald-50 text-emerald-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-800 tracking-tighter mb-4">Cursos Certificados</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Acesse conteúdos exclusivos de Teologia, Gestão Industrial e Tecnologia com certificados oficiais.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
            <div className="bg-blue-50 text-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Users size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-800 tracking-tighter mb-4">Empregabilidade</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Conexão direta com empresas parceiras e banco de vagas exclusivo para membros da comunidade.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
            <div className="bg-orange-50 text-orange-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-800 tracking-tighter mb-4">Gestão Social</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Controle rigoroso de bolsas de estudo e apoio ao cidadão através de governança transparente.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER DE GOVERNANÇA */}
      <footer className="py-20 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <span className="font-black text-2xl tracking-tighter uppercase">ConnectionCyber<span className="text-emerald-500">OS</span></span>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.3em] mt-2">© 2026 • ADBRAS PIRACICABA</p>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-500">Privacidade</Link>
            <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-500">Termos</Link>
            <Link href="/portal-cidadania" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-500 underline">Admin</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}