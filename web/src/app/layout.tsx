// ============================================================================
// PROJETO: ConnectionCyberOS
// MÓDULO: UI-CORE / Layout Global
// ARQUIVO: src/app/layout.tsx
// DESCRIÇÃO: Layout raiz com ThemeProvider global.
// ============================================================================

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Connection Cyber OS",
  description: "Sistema Integrado de Governança e Inteligência",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
