// Local: web/src/app/auth/signup/page.tsx
'use client'

import Link from "next/link";
import { signup } from "../actions";
import { useFormStatus } from "react-dom";
import { ShieldCheck, User, Mail, Lock, CheckCircle } from "lucide-react";

/**
 * @description Componente de botão com feedback de estado de submissão (Injeção Funcional)
 */
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button 
      type="submit"
      disabled={pending}
      className="md:col-span-2 w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 mt-4 disabled:opacity-50"
    >
      {pending ? "Criando conta..." : "Finalizar Cadastro"}
    </button>
  );
}

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl shadow-slate-200 overflow-hidden flex flex-col md:flex-row">
        
        {/* Info Lateral - IMUTÁVEL */}
        <div className="md:w-1/3 bg-emerald-500 p-12 text-white flex flex-col justify-between">
          <div>
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-8">
              <ShieldCheck size={28} />
            </div>
            <h2 className="text-3xl font-black tracking-tighter leading-tight mb-6">Comece sua jornada hoje.</h2>
            <ul className="space-y-4">
              {[
                "Acesso Vitalício",
                "Certificados Oficiais",
                "Banco de Vagas",
                "Suporte Premium"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-emerald-100">
                  <CheckCircle size={16} className="text-white" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <p className="text-[10px] font-black uppercase tracking-widest opacity-60">
            Governança ADBRAS Piracicaba
          </p>
        </div>

        {/* Formulário - INJEÇÃO DE LÓGICA E ATRIBUTOS NAME */}
        <div className="flex-1 p-12 md:p-16">
          <div className="mb-10">
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter">Criar Nova Conta</h1>
            <p className="text-slate-500 text-sm mt-2">Preencha os dados para emissão do seu perfil</p>
          </div>

          <form action={signup} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Nome Completo (Para o Certificado)</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  name="fullName"
                  type="text" 
                  required
                  placeholder="Como no seu RG"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-emerald-500 transition-all font-medium text-slate-700"
                />
              </div>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">E-mail Principal</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  name="email"
                  type="email" 
                  required
                  placeholder="seu@email.com"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-emerald-500 transition-all font-medium text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Senha</label>
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

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Confirmar Senha</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-emerald-500 transition-all font-medium text-slate-700"
                />
              </div>
            </div>

            <SubmitButton />
          </form>

          <p className="mt-8 text-center text-sm text-slate-500 font-medium">
            Já possui acesso?{" "}
            <Link href="/auth/login" className="text-emerald-600 font-black uppercase text-[11px] tracking-widest hover:underline">
              Fazer Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}