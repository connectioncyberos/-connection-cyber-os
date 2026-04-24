// Local: web/tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // ... outras configurações (content, plugins, etc)
  theme: {
    extend: {
      colors: {
        // [MODALIDADE 1]: Paleta Enterprise Emerald (Preservada)
        cyber: {
          950: '#020617', // Fundo Ultra-Dark (Valor preenchido conforme governança)
          900: '#0f172a', // Cards Dark
          emerald: '#10b981', // Cor de Ação
          glow: 'rgba(16, 185, 129, 0.15)', // Efeito Neon Suave
        },

        // [MODALIDADE 2]: DNA Portal Cidadania - Eixo Saúde/Social (Injetado)
        cidadania: {
          dominant: '#FFFFFF', // Branco Hospitalar
          primary: '#004a99',  // Azul Confiança
          secondary: '#F1F5F9',// Cinza Clínico
          action: '#10B981',   // Verde Cuidado
          text: '#1E293B',     // Cinza Profissional
        },
      },
      gridTemplateColumns: {
        // Suporte para grids de alta densidade
        'dashboard-3': 'repeat(3, minmax(0, 1fr))',
        'dashboard-4': 'repeat(4, minmax(0, 1fr))',
      },
      boxShadow: {
        // Sombras customizadas para ambos os contextos
        'cyber-card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'cyber-glow': '0 0 15px 2px rgba(16, 185, 129, 0.2)',
      }
    }
  }
};

export default config;