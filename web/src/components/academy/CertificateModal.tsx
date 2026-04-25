// Local: web/src/components/academy/CertificateModal.tsx
import { Award, Download, X } from "lucide-react";

export function CertificateModal({ courseTitle, studentName, authCode, onClose }: any) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
      <div className="relative bg-white w-full max-w-4xl rounded-[2rem] overflow-hidden shadow-2xl">
        
        {/* Border Decorativa Hospitalar/Séria */}
        <div className="absolute inset-4 border-2 border-emerald-500/20 rounded-[1.5rem] pointer-events-none" />

        <div className="p-16 text-center">
          <button onClick={onClose} className="absolute top-8 right-8 text-slate-400 hover:text-slate-600 transition-colors">
            <X size={24} />
          </button>

          <Award className="mx-auto text-emerald-500 mb-8" size={64} strokeWidth={1} />
          
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-4">Certificado de Conclusão</h2>
          
          <p className="text-slate-500 font-medium mb-2">Certificamos que</p>
          <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-8">{studentName}</h3>
          
          <p className="text-slate-500 font-medium mb-2">concluiu com êxito o curso de</p>
          <h4 className="text-2xl font-bold text-slate-800 mb-12">{courseTitle}</h4>

          <div className="flex flex-col items-center gap-6">
            <div className="bg-slate-50 px-6 py-3 rounded-full border border-slate-100">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Cód. Autenticidade: </span>
              <span className="text-[10px] font-mono font-bold text-slate-700">{authCode}</span>
            </div>

            <button 
              onClick={() => window.print()}
              className="flex items-center gap-3 bg-emerald-500 text-white font-black px-10 py-5 rounded-2xl hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100 uppercase text-xs tracking-widest"
            >
              <Download size={18} /> Imprimir Certificado
            </button>
          </div>
        </div>

        {/* Rodapé de Governança */}
        <div className="bg-slate-900 py-4 text-center">
          <p className="text-[8px] text-white/30 font-black uppercase tracking-[0.5em]">ConnectionCyberOS • Governança Adbras Madureira Piracicaba</p>
        </div>
      </div>
    </div>
  );
}