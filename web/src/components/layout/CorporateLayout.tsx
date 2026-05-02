// ============================================================================
// PROJETO: ConnectionCyberOS
// MÓDULO: UI-CORE / Layout Corporativo
// ARQUIVO: src/components/layout/CorporateLayout.tsx
// DESCRIÇÃO: Layout com sidebar corporativa fixa.
// ============================================================================

"use client";

import CorporateSidebar from "@/components/navigation/CorporateSidebar";
import CorporateTopbar from "@/components/navigation/CorporateTopbar";

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", width: "100%", minHeight: "100vh" }}>
      <CorporateSidebar />

      <main
        style={{
          marginLeft: "240px",
          padding: "32px",
          width: "100%",
          backgroundColor: "var(--bg)",
          color: "var(--text)",
        }}
      >
        <CorporateTopbar />
        {children}
      </main>
    </div>
  );
}
