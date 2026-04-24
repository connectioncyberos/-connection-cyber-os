// Local: web/src/app/(cidadania)/layout.tsx
export default function CidadaniaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // h-screen + overflow-hidden: Garante que o layout ocupe exatamente 100% da tela sem rolagem
    // bg-white: Cor dominante (60%) conforme paleta hospitalar
    <div className="h-screen w-full overflow-hidden bg-white flex flex-col">
      
      {/* NAVBAR: Altura fixa (h-16) para garantir consistência com a área de Home/Login */}
      {/* bg-cidadania-primary: Azul Saúde (30%) */}
      <nav className="h-16 w-full bg-cidadania-primary text-white flex items-center px-6 shadow-sm z-50">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight">CIDADANIA OS</span>
          <div className="flex gap-6 text-sm font-medium">
            <span className="opacity-80">Saúde & Social</span>
            <div className="h-4 w-[1px] bg-white/20 self-center" />
            <span className="text-emerald-400 font-mono uppercase">Online</span>
          </div>
        </div>
      </nav>

      {/* ÁREA DE CONTEÚDO: flex-1 garante que o conteúdo preencha o espaço entre Nav e Footer */}
      <main className="flex-1 w-full relative bg-white flex items-center justify-center p-6">
        {/* Container interno seguindo o critério de centralização e largura max-w-7xl da Login */}
        <div className="w-full h-full max-w-7xl mx-auto flex items-center justify-center">
          {children}
        </div>
      </main>

      {/* FOOTER FIXO: Padronização Enterprise conforme a tela de login original */}
      <footer className="h-10 w-full border-t border-slate-100 flex items-center justify-center bg-white text-[10px] text-slate-400 uppercase tracking-widest">
        ConnectionCyberOS © 2026 • Enterprise Health System
      </footer>
    </div>
  )
}