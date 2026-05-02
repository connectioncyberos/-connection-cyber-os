// ============================================================================
// PROJETO: ConnectionCyberOS
// MÓDULO: UI-CORE / Navegação Corporativa
// ARQUIVO: src/components/navigation/CorporateSidebar.tsx
// DESCRIÇÃO: Menu lateral corporativo padrão Microsoft/Azure.
// ============================================================================

"use client";

import Link from "next/link";

export default function CorporateSidebar() {
  const menu = [
    { label: "Dashboard", href: "/home" },
    { label: "Usuários", href: "/usuarios" },
    { label: "Cursos", href: "/cursos" },
    { label: "Relatórios", href: "/relatorios" },
    { label: "Configurações", href: "/config" },
  ];

  return (
    <aside
      style={{
        width: "240px",
        height: "100vh",
        backgroundColor: "var(--surface)",
        borderRight: "1px solid var(--border)",
        padding: "24px 16px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 900,
          marginBottom: "16px",
          color: "var(--primary)",
        }}
      >
        ConnectionCyberOS
      </h2>

      {menu.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 600,
            color: "var(--text)",
            textDecoration: "none",
            backgroundColor: "transparent",
            border: "1px solid transparent",
          }}
        >
          {item.label}
        </Link>
      ))}
    </aside>
  );
}
