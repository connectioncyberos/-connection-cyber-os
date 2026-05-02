// ============================================================================
// PROJETO: ConnectionCyberOS
// MÓDULO: UI-CORE / HOME CORPORATIVA
// ARQUIVO: src/app/home/page.tsx
// DESCRIÇÃO: Página inicial corporativa usando BaseLayout + ThemeProvider.
// ============================================================================

import BaseLayout from "@/components/layout/BaseLayout";
import CorporateCard from "@/components/corporate/CorporateCard";
import CorporateContainer from "@/components/corporate/CorporateContainer";
import CorporateGrid from "@/components/corporate/CorporateGrid";
import CorporateSectionHeader from "@/components/corporate/CorporateSectionHeader";
import CorporateMetricsCard from "@/components/corporate/CorporateMetricsCard";

export default function HomeCorporate() {
  return (
    <BaseLayout>
      <h1
        style={{
          fontSize: "32px",
          fontWeight: 800,
          marginBottom: "12px",
          color: "var(--primary)",
        }}
      >
        Painel Corporativo
      </h1>

      <p
        style={{
          fontSize: "16px",
          color: "var(--muted)",
          marginBottom: "24px",
        }}
      >
        Bem-vindo ao ambiente corporativo do ConnectionCyberOS.
      </p>

      <CorporateContainer>
        <CorporateSectionHeader
          title="Visão Geral"
          subtitle="Informações essenciais do ambiente corporativo"
        />

        <CorporateGrid>
          <CorporateCard title="Status do Sistema" subtitle="Serviços e módulos">
            <p style={{ color: "var(--muted)" }}>
              Todos os serviços estão operacionais.
            </p>
          </CorporateCard>

          <CorporateCard title="Acessos Recentes" subtitle="Últimas atividades">
            <p style={{ color: "var(--muted)" }}>
              Último login: há poucos minutos.
            </p>
          </CorporateCard>
        </CorporateGrid>
      </CorporateContainer>

      <CorporateContainer>
        <CorporateSectionHeader
          title="Indicadores"
          subtitle="Métricas essenciais do ambiente corporativo"
        />

        <CorporateGrid minWidth={200}>
          <CorporateMetricsCard
            label="Usuários Ativos"
            value="1.284"
            description="Últimas 24 horas"
          />

          <CorporateMetricsCard
            label="Cursos Concluídos"
            value="342"
            description="Total acumulado"
          />

          <CorporateMetricsCard
            label="Acessos Hoje"
            value="89"
            description="Atualizado agora"
          />
        </CorporateGrid>
      </CorporateContainer>
    </BaseLayout>
  );
}
