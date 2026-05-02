// ============================================================================
// PROJETO: ConnectionCyberOS
// MÓDULO: UI-CORE / Theme Engine
// ARQUIVO: src/components/theme/ThemeSwitcher.tsx
// DESCRIÇÃO: Botão flutuante para troca de tema (corporate, dashboard, minimal, cyber).
// ============================================================================

"use client";

import { useTheme } from "@/providers/ThemeProvider";

export default function ThemeSwitcher() {
  const { themeName, setThemeName } = useTheme();

  const themes: Array<"corporate" | "dashboard" | "minimal" | "cyber"> = [
    "corporate",
    "dashboard",
    "minimal",
    "cyber",
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        zIndex: 9999,
      }}
    >
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => setThemeName(t)}
          style={{
            backgroundColor: themeName === t ? "var(--primary)" : "var(--surface)",
            color: themeName === t ? "var(--bg)" : "var(--text)",
            border: "1px solid var(--border)",
            padding: "8px 12px",
            borderRadius: "8px",
            fontSize: "12px",
            fontWeight: 700,
            cursor: "pointer",
            textTransform: "uppercase",
          }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
