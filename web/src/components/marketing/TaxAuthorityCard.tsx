import React from 'react';
import { 
  CheckCircle2, User, Landmark, Home, HeartPulse, 
  PieChart, ShieldCheck, UserCheck, Briefcase, Calendar 
} from 'lucide-react';

const TaxChecklistPage = () => {
  // Lógica de Negócio Consolidada
  const ANOS_MERCADO = new Date().getFullYear() - 2011;
  const CNPJ = "13.348.881/0001-88";

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 print:p-0 print:bg-white font-sans">
      {/* Container Principal - Otimizado para A4 na impressão */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200 print:shadow-none print:border-none">
        
        {/* Header de Autoridade (FUSÃO: Unificação de Layout e Identidade) */}
        <header className="bg-slate-900 text-white p-8 print:bg-slate-900 print:text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight mb-1">Checklist Essencial IRPF 2026</h1>
              <p className="text-slate-400 font-medium tracking-wide">Protocolo de Conformidade Fiscal & Gestão de Patrimônio</p>
            </div>
            <div className="bg-amber-500 text-slate-900 px-4 py-2 rounded-lg font-black text-sm flex items-center gap-2 shadow-lg">
              <ShieldCheck size={18} />
              {ANOS_MERCADO} ANOS DE EXPERTISE
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap gap-x-6 gap-y-2 uppercase tracking-wider">
            <span className="flex items-center gap-1"><Briefcase size={12} /> CONNECTIONCYBER ASSESSORIA E TREINAMENTO</span>
            <span className="flex items-center gap-1"><ShieldCheck size={12} /> CNPJ: {CNPJ}</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> FUNDADA EM: 10/03/2011</span>
          </div>
        </header>

        {/* Corpo do Checklist (Bloco Imutável do Arquivo Enviado) */}
        <main className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-2">
          
          {/* Coluna 1 */}
          <section className="space-y-6">
            <div className="bg-white">
              <h2 className="flex items-center gap-2 text-slate-900 font-bold mb-4 border-b pb-2 border-slate-100">
                <User size={20} className="text-amber-600" /> 01. Base Cadastral
              </h2>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><CheckCircle2 size={16} className="shrink-0 mt-0.5 text-slate-900" /> CPF Titular e Dependentes (Obrigatório)</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="shrink-0 mt-0.5 text-slate-900" /> Comprovante de Residência Atualizado</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="shrink-0 mt-0.5 text-slate-900" /> Título de Eleitor</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="shrink-0 mt-0.5 text-slate-900" /> Dados Bancários (Para Restituição)</li>
              </ul>
            </div>

            <div className="bg-white">
              <h2 className="flex items-center gap-2 text-slate-900 font-bold mb-4 border-b pb-2 border-slate-100">
                <Landmark size={20} className="text-amber-600" /> 02. Fluxo de Rendimentos
              </h2>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><CheckCircle2 size={16} className="shrink-0 mt-0.5 text-slate-900" /> Informes de Rendimentos (Empresas/Pro-labore)</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="shrink-0 mt-0.5 text-slate-900" /> Informe de Rendimentos Bancários e Corretoras</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="shrink-0 mt-0.5 text-slate-900" /> Extratos de Criptoativos e Renda Variável</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="shrink-0 mt-0.5 text-slate-900" /> Comprovantes de Aposentadoria/Pensão</li>
              </ul>
            </div>
          </section>

          {/* Coluna 2 */}
          <section className="space-y-6">
            <div className="bg-white">
              <h2 className="flex items-center gap-2 text-slate-900 font-bold mb-4 border-b pb-2 border-slate-100">
                <Home size={20} className="text-amber-600" /> 03. Gestão de Patrimônio
              </h2>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><CheckCircle2 size={16} className="shrink-0 mt-0.5 text-slate-900" /> Escrituras/Contratos de Imóveis (IPTU)</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="shrink-0 mt-0.5 text-slate-900" /> Documentos de Veículos (Renavam)</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="shrink-0 mt-0.5 text-slate-900" /> Contratos de Compra/Venda realizados em 2025</li>
              </ul>
            </div>

            <div className="bg-white">
              <h2 className="flex items-center gap-2 text-slate-900 font-bold mb-4 border-b pb-2 border-slate-100">
                <HeartPulse size={20} className="text-amber-600" /> 04. Deduções e Saúde
              </h2>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><CheckCircle2 size={16} className="shrink-0 mt-0.5 text-slate-900" /> Notas Fiscais Médicas e Planos de Saúde</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="shrink-0 mt-0.5 text-slate-900" /> Comprovantes de Educação (Ensino Regular)</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="shrink-0 mt-0.5 text-slate-900" /> Aportes em Previdência Privada (PGBL)</li>
              </ul>
            </div>

            <div className="bg-white">
              <h2 className="flex items-center gap-2 text-slate-900 font-bold mb-4 border-b pb-2 border-slate-100">
                <PieChart size={20} className="text-amber-600" /> 05. MEI e Extras
              </h2>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><CheckCircle2 size={16} className="shrink-0 mt-0.5 text-slate-900" /> Declaração Faturamento MEI (DASN-SIMEI)</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="shrink-0 mt-0.5 text-slate-900" /> Recibos de Aluguéis e Doações</li>
              </ul>
            </div>
          </section>
        </main>

        {/* Rodapé - Call to Action (FUSÃO: Unificação da Autoridade Profissional) */}
        <footer className="bg-slate-50 p-8 border-t border-slate-100 print:bg-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border-2 border-slate-900 print:border-slate-400">
                <UserCheck className="text-slate-900" size={28} />
              </div>
              <div className="text-left">
                <p className="text-slate-900 font-black text-lg leading-tight text-nowrap">Dra. Lucia Helena</p>
                <p className="text-amber-700 text-[11px] font-bold uppercase tracking-[0.15em]">Chief Tax Specialist</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="bg-white border border-slate-200 px-5 py-2 rounded-xl shadow-sm flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-black text-slate-800 tracking-tighter">(11) 9 6525-8055</span>
              </div>
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
                Servindo para servir desde 2011
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Botão Flutuante - Oculto na Impressão (Mantido conforme Arquivo Enviado) */}
      <div className="fixed bottom-8 right-8 print:hidden">
        <button 
          onClick={() => window.print()}
          className="bg-slate-900 text-white px-8 py-4 rounded-full font-black shadow-2xl hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
        >
          <PieChart size={20} className="group-hover:rotate-12 transition-transform" />
          Gerar PDF / Imprimir
        </button>
      </div>
    </div>
  );
};

export default TaxChecklistPage;