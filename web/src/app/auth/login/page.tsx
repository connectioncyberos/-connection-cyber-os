// Local: web/src/app/auth/login/page.tsx
'use client'

import Link from "next/link";
import { login } from "../actions";
import { useFormStatus } from "react-dom";
import { ShieldCheck, ArrowRight, Mail, Lock } from "lucide-react";

/**
 * @description Componente de botão com feedback de estado de submissão
 */
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button 
      type="submit"
      disabled={pending}
      className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 mt-6 disabled:opacity-50"
    >
      {pending ? "Autenticando..." : <>Acessar Portal <ArrowRight size={16} /></>}
    </button>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      
      {/* Coluna de Branding (Visível em Desktop) - IMUTÁVEL */}
      <div className="hidden md:flex md:w-1/2 bg-slate-900 p-16 flex-col justify-between text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-12">
            <div className="bg-emerald-500 p-2 rounded-xl">
              <ShieldCheck size={32} />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase">Connection<span className="text-emerald-500">Cyber</span></span>
          </div>
          
          <h2 className="text-5xl font-black tracking-tighter leading-tight mb-6">
            Bem-vindo de volta ao <br />
            <span className="text-emerald-500">Próximo Nível.</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium max-w-md">
            Acesse sua área de aluno, verifique seu progresso e emita seus certificados com governança total.
          </p>
        </div>

        <div className="relative z-10 border-t border-white/10 pt-8">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
            ADBRAS Madureira Piracicaba • Governança Digital
          </p>
        </div>
      </div>

      {/* Coluna do Formulário - INJEÇÃO FUNCIONAL */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-sm">
          <div className="mb-10">
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter">Entrar na Plataforma</h1>
            <p className="text-slate-500 text-sm mt-2">Insira suas credenciais de acesso</p>
          </div>

          <form action={login} className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">E-mail Corporativo</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  name="email"
                  type="email" 
                  required
                  placeholder="exemplo@email.com"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-emerald-500 transition-all font-medium text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Sua Senha</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  name="password"
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-emerald-500 transition-all font-medium text-slate-700"
                />
              </div>
            </div>

            <SubmitButton />
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500 font-medium">
              Não tem uma conta?{" "}
              <Link href="/auth/signup" className="text-emerald-600 font-black uppercase text-[11px] tracking-widest hover:underline">
                Cadastre-se Agora
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}