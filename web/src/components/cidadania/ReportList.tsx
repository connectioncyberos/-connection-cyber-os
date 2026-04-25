// Local: web/src/components/cidadania/ReportList.tsx
import { ReactNode } from 'react';

interface ReportItemProps {
  label: string;
  count: number;
  percentage: number;
  color: string;
}

export function ReportList({ title, items }: { title: string, items: ReportItemProps[] }) {
  return (
    <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100">
      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">{title}</h4>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="group">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-bold text-slate-700 group-hover:text-cidadania-primary transition-colors">{item.label}</span>
              <span className="font-mono font-bold text-slate-500">{item.count}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
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