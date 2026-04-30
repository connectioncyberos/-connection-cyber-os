// ============================================================================
// PROJETO: ConnectionCyberOS
// MÓDULO: UI-CORE / Layout Base
// ARQUIVO: src/components/layout/BaseLayout.tsx
// DESCRIÇÃO: Estrutura base de página com Header fixo.
// ============================================================================

import Header from "./Header";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main style={{ flex: 1, padding: "24px" }}>{children}</main>
    </div>
  );
}
