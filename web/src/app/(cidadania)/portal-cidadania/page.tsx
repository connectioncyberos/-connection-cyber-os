// Local: web/src/app/(cidadania)/portal-cidadania/page.tsx

export default function CidadaniaPage() {
  return (
    // h-full garante que ele use a área reservada pelo layout fixo sem gerar scroll
    <div className="h-full w-full flex items-center justify-center py-4 bg-white text-cidadania-text font-sans">
      
      {/* Container Principal: max-w-4xl com sombra profunda conforme critério de Home/Login */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 p-12 text-center">
        
        {/* Título: Usando Token Semântico cidadania-primary */}
        <h1 className="text-5xl font-extrabold text-cidadania-primary tracking-tight">
          Portal <span className="font-light text-slate-400 uppercase text-3xl">CIDADANIA</span>
        </h1>
        
        {/* Texto de Apoio: Preservando Identidade Específica do Arquivo Original */}
        <p className="mt-8 text-xl text-slate-600 max-w-md mx-auto">
          Bem-vindo ao Ecossistema Social <br />
          <span className="font-bold">ADBRAS MADUREIRA PIRACICABA</span>.
        </p>
        
        {/* Card de Status: Usando Token cidadania-secondary e animação pulse */}
        <div className="mt-10 p-6 bg-cidadania-secondary rounded-2xl flex items-center gap-6 text-left shadow-inner border-l-4 border-cidadania-action">
           <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm text-cidadania-action">
              <div className="h-3 w-3 bg-cidadania-action rounded-full animate-pulse" />
           </div>
           <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Status do Sistema</p>
              <p className="text-slate-700 font-medium text-lg">Ambiente Hospitalar Validado ✅</p>
           </div>
        </div>

        {/* Botão de Ação: Usando Token cidadania-action (Verde Cuidado) */}
        <button className="mt-12 w-full max-w-md bg-cidadania-action hover:bg-emerald-700 text-white font-black py-5 rounded-2xl transition-all shadow-md shadow-emerald-200 uppercase tracking-tighter text-xl">
          Acessar Meus Serviços de Saúde
        </button>

      </div>
    </div>
  )
}