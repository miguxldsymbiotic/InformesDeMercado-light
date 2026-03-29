import ReportGenerator from './pages/ReportGenerator';
import { FileText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6 font-sans selection:bg-brand-blue/10">
      {/* Visual Background Decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
          <defs>
            <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
        </svg>
      </div>

      <div className="w-full max-w-4xl relative z-10">
        {/* Top Branding / Identity */}
        <div className="flex flex-col items-center mb-10 text-center">
            <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl shadow-slate-900/20 rotate-3 transform hover:rotate-0 transition-transform duration-300">
                    <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="h-8 w-[2pt] bg-slate-200 hidden sm:block"></div>
                <div className="text-left">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-none">SymbiAnalytics</h2>
                    <p className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-[0.3em] mt-1">Intelligence Unit</p>
                </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter mb-4 max-w-2xl leading-[1.1]">
                Generador de Informes de Mercado
            </h1>
            <p className="text-slate-500 text-base max-w-lg leading-relaxed">
                Herramienta profesional de descarga de reportes estratégicos con integración de datos oficiales SNIES, OLE, SPADIES y Saber PRO.
            </p>
        </div>

        {/* Main Tool Area */}
        <div className="bg-white rounded-[2.5rem] p-1 shadow-2xl shadow-slate-200 border border-slate-100">
            <div className="bg-white rounded-[2.2rem] p-4 sm:p-10 border border-slate-50">
                <ReportGenerator />
            </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.25em]">
                &copy; 2026 Symbiotic Analytics // Software de Consultoría Educativa
            </p>
        </div>
      </div>
    </div>
  );
}

export default App;
