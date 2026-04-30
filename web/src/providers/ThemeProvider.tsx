// ============================================================================
// PROJETO: ConnectionCyberOS
// MÓDULO: UI-CORE / Theme Engine
// ARQUIVO: src/providers/ThemeProvider.tsx
// DESCRIÇÃO: Provider global de temas (corporate + variações).
// ============================================================================

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { themes, ThemeName, ThemeConfig } from "@/styles/themes";

interface ThemeContextProps {
  theme: ThemeConfig;
  themeName: ThemeName;
  setThemeName: (name: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>("corporate");

  useEffect(() => {
    const theme = themes[themeName];

    document.documentElement.style.setProperty("--bg", theme.colors.background);
    document.documentElement.style.setProperty("--surface", theme.colors.surface);
    document.documentElement.style.setProperty("--text", theme.colors.text);
    document.documentElement.style.setProperty("--muted", theme.colors.muted);
    document.documentElement.style.setProperty("--primary", theme.colors.primary);
    document.documentElement.style.setProperty("--secondary", theme.colors.secondary);
    document.documentElement.style.setProperty("--border", theme.colors.border);
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ theme: themes[themeName], themeName, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  }
  return ctx;
}
