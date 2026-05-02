// ============================================================================
// PROJETO: ConnectionCyberOS
// MÓDULO: UI-CORE / Componentes Corporativos
// ARQUIVO: src/components/corporate/CorporateSectionHeader.tsx
// DESCRIÇÃO: Cabeçalho padronizado para seções internas.
// ============================================================================

"use client";

export default function CorporateSectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: 900,
          color: "var(--text)",
          marginBottom: subtitle ? "6px" : "0px",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            fontSize: "14px",
            color: "var(--muted)",
            fontWeight: 500,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
