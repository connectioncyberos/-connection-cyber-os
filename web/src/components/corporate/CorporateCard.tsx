// ============================================================================
// PROJETO: ConnectionCyberOS
// MÓDULO: UI-CORE / Componentes Corporativos
// ARQUIVO: src/components/corporate/CorporateCard.tsx
// DESCRIÇÃO: Card corporativo padrão baseado no tema atual.
// ============================================================================

"use client";

export default function CorporateCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3
        style={{
          fontSize: "18px",
          fontWeight: 800,
          color: "var(--text)",
        }}
      >
        {title}
      </h3>

      {subtitle && (
        <p
          style={{
            fontSize: "13px",
            color: "var(--muted)",
            marginBottom: "8px",
          }}
        >
          {subtitle}
        </p>
      )}

      <div>{children}</div>
    </div>
  );
}
