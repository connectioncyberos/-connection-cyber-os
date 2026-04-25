// Local: web/src/components/cidadania/CockpitCard.tsx
import { ReactNode } from 'react';

interface CockpitCardProps {
  title: string;
  subtitle?: string;
  icon: ReactNode;
  children: ReactNode;
  isSpecial?: boolean;
}

export function CockpitCard({ title, subtitle, icon, children, isSpecial }: CockpitCardProps) {
  // Definição de cores para aplicação sistêmica
  const brandColor = isSpecial ? 'text-cidadania-action' : 'text-cidadania-primary';
  const brandBorder = isSpecial ? 'border-cidadania-action/30' : 'border-cidadania-primary/20';
  const brandHoverBorder = isSpecial ? 'hover:border-cidadania-action' : 'hover:border-cidadania-primary';
  const iconBgHover = isSpecial ? 'group-hover:bg-emerald-50' : 'group-hover:bg-blue-50';

  return (
    <div className={`
      group relative p-8 rounded-[2rem] border-[1px] bg-white
      transition-all duration-500 ease-out
      hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200
      ${brandBorder} ${brandHoverBorder}
      ${isSpecial ? 'shadow-lg shadow-emerald-50' : 'shadow-sm shadow-slate-100'}
    `}>
      {/* HEADER: Ícone e Títulos */}
      <div className="flex items-center gap-5 mb-8">
        <div className={`
          p-4 rounded-2xl transition-all duration-500
          bg-slate-50 ${iconBgHover}
          text-slate-400 group-hover:${brandColor}
        `}>
          {icon}
        </div>
        
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-500 transition-colors">
            {subtitle || 'Módulo Ativo'}
          </span>
          <h3 className="text-xl font-bold text-slate-800 tracking-tight leading-tight">
            {title}
          </h3>
        </div>
      </div>
      
      {/* CONTEÚDO: Visível e Estruturado */}
      <div className="relative z-10 space-y-4">
        {children}
      </div>

      {/* DETALHE 3D: Linha de Foco inferior */}
      <div className={`
        absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 
        group-hover:w-1/3 transition-all duration-700 rounded-full
        ${isSpecial ? 'bg-cidadania-action' : 'bg-cidadania-primary'}
      `} />
    </div>
  );
}