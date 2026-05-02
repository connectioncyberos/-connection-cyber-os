// ============================================================================
// PROJETO: ConnectionCyberOS
// MÓDULO: UI-CORE / Componentes Corporativos
// ARQUIVO: src/components/corporate/CorporateContainer.tsx
// DESCRIÇÃO: Container corporativo para seções internas.
// ============================================================================

"use client";

export default function CorporateContainer({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        width: "100%",
        marginBottom: "32px",
        padding: "24px",
        backgroundColor: "var(--surface)",
        borderRadius: "12px",
        border: "1px solid var(--border)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      {title && (
        <h2
          style={{
            fontSize: "20px",
            fontWeight: 800,
            marginBottom: "16px",
            color: "var(--text)",
          }}
        >
          {title}
        </h2>
      )}

      {children}
    </section>
  );
}
