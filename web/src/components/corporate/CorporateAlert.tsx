// ============================================================================
// PROJETO: ConnectionCyberOS
// MÓDULO: UI-CORE / Componentes Corporativos
// ARQUIVO: src/components/corporate/CorporateAlert.tsx
// DESCRIÇÃO: Barra de alerta/aviso corporativo.
// ============================================================================

"use client";

type Variant = "info" | "success" | "warning" | "error";

const variantColors: Record<Variant, { bg: string; border: string; text: string }> = {
  info: {
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.5)",
    text: "#60a5fa",
  },
  success: {
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.5)",
    text: "#34d399",
  },
  warning: {
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.5)",
    text: "#fbbf24",
  },
  error: {
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.5)",
    text: "#f87171",
  },
};

export default function CorporateAlert({
  message,
  variant = "info",
}: {
  message: string;
  variant?: Variant;
}) {
  const colors = variantColors[variant];

  return (
    <div
      style={{
        width: "100%",
        padding: "10px 14px",
        borderRadius: "8px",
        border: `1px solid ${colors.border}`,
        backgroundColor: colors.bg,
        color: colors.text,
        fontSize: "13px",
        fontWeight: 600,
        marginBottom: "16px",
      }}
    >
      {message}
    </div>
  );
}
