# Local: _SCRIPTS_UTIL\test-menu.ps1
# Projeto: ConnectionCyberOS

Clear-Host
Set-Location -Path "C:\Projetos\connection-cyber-os"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "==========================================================" -ForegroundColor Magenta
Write-Host "      MENU DE OPERAÇÕES - CONNECTION CYBER OS" -ForegroundColor White -BackgroundColor DarkMagenta
Write-Host "      AMBIENTE: DEV | NÚCLEO: NEXT.JS + SUPABASE" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Magenta

Write-Host "`n1. [CORE] Rodar FIRE TEST (Validar conexão DB)" -ForegroundColor White
Write-Host "2. [AUTH] Validar Cadeia de Auditoria (Security)" -ForegroundColor White
Write-Host "3. [PERF] Testar Latência de Resposta (Performance)" -ForegroundColor White
Write-Host "4. [FLOW] Fluxo Ponta-a-Ponta (Integração)" -ForegroundColor White
Write-Host "5. [ALL] Executar Suite Completa de Testes" -ForegroundColor Yellow
Write-Host "0. Sair`n" -ForegroundColor Red

$choice = Read-Host "Selecione o Módulo de Execução"

switch ($choice) {
    "1" { npx ts-node tests/core/fire-test.ts }
    "2" {
        npx ts-node tests/security/audit-chain.spec.ts
        npx ts-node tests/security/attack-simulation.spec.ts
    }
    "3" { npx ts-node tests/performance/core-latency.bench.ts }
    "4" { npx ts-node tests/integration/fullstack-flow.spec.ts }
    "5" { 
        Write-Host "Iniciando Full Audit..." -ForegroundColor Cyan
        npx ts-node tests/core/fire-test.ts
        npx ts-node tests/security/audit-chain.spec.ts
        npx ts-node tests/integration/fullstack-flow.spec.ts
    }
    "0" { exit }
    default { Write-Host "Opção inválida." -ForegroundColor Red }
}

Write-Host "`n[Aguardando próxima instrução...]" -ForegroundColor Gray