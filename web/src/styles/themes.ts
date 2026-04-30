// ============================================================================
// PROJETO: ConnectionCyberOS
// MÓDULO: UI-CORE / Design System
// ARQUIVO: src/styles/themes.ts
// DESCRIÇÃO: Temas globais (corporativo + variações) para o frontend.
// ============================================================================

export type ThemeName = "corporate" | "dashboard" | "minimal" | "cyber";

export interface ThemeConfig {
  name: string;
  colors: {
    background: string;
    surface: string;
    text: string;
    muted: string;
    primary: string;
    secondary: string;
    border: string;
  };
  radius: {
    card: string;
    button: string;
  };
  shadow: {
    card: string;
  };
}

// --------------------------------------------------------------------------
// TEMA PRINCIPAL: CORPORATE (Base Microsoft/Azure)
// --------------------------------------------------------------------------
export const corporateTheme: ThemeConfig = {
  name: "corporate",
  colors: {
    background: "#0F172A",
    surface: "#1E293B",
    text: "#F8FAFC",
    muted: "#94A3B8",
    primary: "#2563EB",
    secondary: "#38BDF8",
    border: "#334155",
  },
  radius: {
    card: "12px",
    button: "8px",
  },
  shadow: {
    card: "0 4px 12px rgba(0,0,0,0.25)",
  },
};

// --------------------------------------------------------------------------
// TEMA 2: DASHBOARD
// --------------------------------------------------------------------------
export const dashboardTheme: ThemeConfig = {
  name: "dashboard",
  colors: {
    background: "#0B0F19",
    surface: "#111827",
    text: "#F3F4F6",
    muted: "#9CA3AF",
    primary: "#10B981",
    secondary: "#34D399",
    border: "#1F2937",
  },
  radius: {
    card: "14px",
    button: "10px",
  },
  shadow: {
    card: "0 4px 16px rgba(0,0,0,0.35)",
  },
};

// --------------------------------------------------------------------------
// TEMA 3: MINIMAL
// --------------------------------------------------------------------------
export const minimalTheme: ThemeConfig = {
  name: "minimal",
  colors: {
    background: "#FFFFFF",
    surface: "#F8FAFC",
    text: "#0F172A",
    muted: "#64748B",
    primary: "#0EA5E9",
    secondary: "#38BDF8",
    border: "#E2E8F0",
  },
  radius: {
    card: "8px",
    button: "6px",
  },
  shadow: {
    card: "0 2px 6px rgba(0,0,0,0.10)",
  },
};

// --------------------------------------------------------------------------
// TEMA 4: CYBER
// --------------------------------------------------------------------------
export const cyberTheme: ThemeConfig = {
  name: "cyber",
  colors: {
    background: "#050505",
    surface: "#0A0A0A",
    text: "#E0E0E0",
    muted: "#888888",
    primary: "#00FF9D",
    secondary: "#00C2FF",
    border: "#1A1A1A",
  },
  radius: {
    card: "10px",
    button: "10px",
  },
  shadow: {
    card: "0 0 20px rgba(0,255,157,0.25)",
  },
};

// --------------------------------------------------------------------------
// REGISTRO DE TEMAS
// --------------------------------------------------------------------------
export const themes: Record<ThemeName, ThemeConfig> = {
  corporate: corporateTheme,
  dashboard: dashboardTheme,
  minimal: minimalTheme,
  cyber: cyberTheme,
};
