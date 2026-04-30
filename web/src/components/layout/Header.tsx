// ============================================================================
// PROJETO: ConnectionCyberOS
// MÓDULO: UI-CORE / Layout Base
// ARQUIVO: src/components/layout/Header.tsx
// DESCRIÇÃO: Cabeçalho corporativo padrão do sistema.
// ============================================================================

"use client";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        height: "64px",
        backgroundColor: "var(--surface)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        color: "var(--text)",
        fontWeight: 600,
        fontSize: "18px",
      }}
    >
      ConnectionCyberOS
    </header>
  );
}
