// ============================================================================
// PROJETO: ConnectionCyberOS
// MÓDULO: UI-CORE / Componentes Corporativos
// ARQUIVO: src/components/corporate/CorporateMetricsCard.tsx
// DESCRIÇÃO: Card corporativo para exibição de métricas e indicadores.
// ============================================================================

"use client";

export default function CorporateMetricsCard({
  label,
  value,
  description,
}: {
  label: string;
  value: string | number;
  description?: string;
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
        gap: "6px",
      }}
    >
      <span
        style={{
          fontSize: "14px",
          fontWeight: 600,
          color: "var(--muted)",
        }}
      >
        {label}
      </span>

      <span
        style={{
          fontSize: "36px",
          fontWeight: 900,
          color: "var(--primary)",
          lineHeight: 1,
        }}
      >
        {value}
      </span>

      {description && (
        <span
          style={{
            fontSize: "12px",
            color: "var(--muted)",
            fontWeight: 500,
          }}
        >
          {description}
        </span>
      )}
    </div>
  );
}
