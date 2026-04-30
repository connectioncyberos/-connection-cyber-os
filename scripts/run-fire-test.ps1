# Local: _SCRIPTS_UTIL\run-fire-test.ps1
# Projeto: ConnectionCyberOS

Set-Location -Path "C:\Projetos\connection-cyber-os"

Write-Host "----------------------------------------------------------" -ForegroundColor Yellow
Write-Host " [EXECUTANDO FIRE TEST - VALIDAÇÃO DE NÚCLEO]" -ForegroundColor White
Write-Host "----------------------------------------------------------" -ForegroundColor Yellow

# Executa o arquivo TS de teste usando o runtime ts-node
npx ts-node tests/core/fire-test.ts

Write-Host "`n[CONCLUÍDO] Verifique os logs acima." -ForegroundColor Green