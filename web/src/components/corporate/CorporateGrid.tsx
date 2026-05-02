// ============================================================================
// PROJETO: ConnectionCyberOS
// MÓDULO: UI-CORE / Componentes Corporativos
// ARQUIVO: src/components/corporate/CorporateGrid.tsx
// DESCRIÇÃO: Grid corporativo reutilizável baseado no tema atual.
// ============================================================================

"use client";

export default function CorporateGrid({
  children,
  minWidth = 260,
}: {
  children: React.ReactNode;
  minWidth?: number;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))`,
        gap: "24px",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}
