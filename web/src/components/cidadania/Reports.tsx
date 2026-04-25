// Local: web/src/components/cidadania/Reports.tsx
import { ReactNode } from 'react';

/**
 * PADRÃO 1: ReportTable (Para dados tabulares densos)
 */
interface ReportTableProps {
  title: string;
  headers: string[];
  children: ReactNode;
}

export function ReportTable({ title, headers, children }: ReportTableProps) {
  return (
    <div className="mt-8 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-100/40 overflow-hidden">
      <div className="px-8 py-5 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
        <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest">{title}</h3>
        <button className="text-[10px] font-black text-cidadania-primary uppercase border border-cidadania-primary/20 px-3 py-1 rounded-lg hover:bg-cidadania-primary hover:text-white transition-all">
          Exportar CSV
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/20">
              {headers.map((header, i) => (
                <th key={i} className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-50">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * PADRÃO 2: ReportList (Para métricas visuais com progresso)
 */
interface ReportItemProps {
  label: string;
  count: number;
  percentage: number;
  color: string;
}

export function ReportList({ title, items }: { title: string, items: ReportItemProps[] }) {
  return (
    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">{title}</h4>
      <div className="space-y-6">
        {items.map((item, idx) => (
          <div key={idx} className="group">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-bold text-slate-700 group-hover:text-cidadania-primary transition-colors">{item.label}</span>
              <span className="font-mono font-bold text-slate-500">{item.count}</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 ${item.color}`} 
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}