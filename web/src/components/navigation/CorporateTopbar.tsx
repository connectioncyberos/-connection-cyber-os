// ============================================================================
// PROJETO: ConnectionCyberOS
// MÓDULO: UI-CORE / Navegação Corporativa
// ARQUIVO: src/components/navigation/CorporateTopbar.tsx
// DESCRIÇÃO: Barra superior corporativa para uso com layouts internos.
// ============================================================================

"use client";

export default function CorporateTopbar() {
  return (
    <header
      style={{
        width: "100%",
        height: "64px",
        borderBottom: "1px solid var(--border)",
        backgroundColor: "var(--surface)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          fontWeight: 800,
          fontSize: "18px",
          color: "var(--text)",
        }}
      >
        Painel Corporativo
      </div>

      <div
        style={{
          fontSize: "12px",
          color: "var(--muted)",
          fontWeight: 600,
        }}
      >
        Ambiente seguro • ConnectionCyberOS
      </div>
    </header>
  );
}
