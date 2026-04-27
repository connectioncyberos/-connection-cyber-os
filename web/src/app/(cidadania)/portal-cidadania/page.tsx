// Local: web/src/app/(cidadania)/portal-cidadania/page.tsx
'use client'

import React, { useState } from 'react';
import { 
  GraduationCap, 
  Wallet, 
  ShieldAlert, 
  Users, 
  ChevronRight,
  FileText,
  Calendar,
  HeartHandshake
} from 'lucide-react';

// Importações com verificação de existência física (Caminhos auditados)
import { CockpitCard } from "@/components/cidadania/CockpitCard";

export default function PortalCidadaniaPage() {
  const [loading] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* SESSÃO 3: HERO & BOAS-VINDAS */}
      <header className="py-12 px-8 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">
              Dashboard <span className="text-slate-400 font-light">Master</span>
            </h1>
            <p className="text-sm font-bold text-slate-500 mt-2 uppercase tracking-widest">
              Portal Cidadania • Governança Digital
            </p>
          </div>
        </div>
      </header>

      {/* SESSÃO 4: COCKPIT DE SERVIÇOS */}
      <section className="py-10 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <CockpitCard 
            title="Portal do Aluno"
            subtitle="Academy OS"
            icon={<GraduationCap size={24} />}
            value="Ativo"
            label="Módulo Educacional"
            actionLabel="Acessar Cursos"
            href="/cursos" 
            variant="emerald"
          />

          <CockpitCard 
            title="Social"
            subtitle="Financeiro"
            icon={<Wallet size={24} />}
            value="R$ 0,00"
            label="Fundo de Apoio"
            variant="purple"
          />

          <CockpitCard 
            title="Governança"
            subtitle="Políticas RLS"
            icon={<ShieldAlert size={24} />}
            value="Auditado"
            label="Status de Segurança"
            variant="slate"
          />

          <CockpitCard 
            title="Comunidade"
            subtitle="Banco de Talentos"
            icon={<Users size={24} />}
            value="0"
            label="Cidadãos Ativos"
            variant="blue"
          />
        </div>
      </section>

      {/* MENSAGEM DE STATUS (SESSÃO 11) */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-slate-900 text-white px-4 py-2 rounded-full flex items-center gap-3 border border-white/10 shadow-2xl">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest opacity-70">System Operational</span>
        </div>
      </div>

    </div>
  );
}