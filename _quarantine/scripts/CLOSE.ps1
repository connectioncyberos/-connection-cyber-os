# ==============================================================================
# PROJETO: ConnectionCyberOS
# SCRIPT: Encerramento de Sessão
# ==============================================================================

Write-Host "==========================================================" -ForegroundColor Red
Write-Host "   CONNECTION CYBER OS | ENCERRANDO SESSÃO                " -ForegroundColor White -BackgroundColor DarkRed
Write-Host "==========================================================" -ForegroundColor Red

Write-Host ""
Write-Host "[SISTEMA] Finalizando processos..." -ForegroundColor Yellow

# Fecha CORE (porta 4000)
Get-Process | Where-Object { $_.Path -like "*core*" -or $_.ProcessName -eq "node" } | Stop-Process -Force -ErrorAction SilentlyContinue

# Fecha portal-api (porta 3001)
Get-Process | Where-Object { $_.Path -like "*portal-api*" -or $_.ProcessName -eq "node" } | Stop-Process -Force -ErrorAction SilentlyContinue

# Fecha portal-public (porta 3002)
Get-Process | Where-Object { $_.Path -like "*portal-public*" -or $_.ProcessName -eq "node" } | Stop-Process -Force -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "[OK] Todos os serviços foram encerrados." -ForegroundColor Green

Write-Host ""
Write-Host "==========================================================" -ForegroundColor Red
Write-Host "   SESSÃO FINALIZADA                                       " -ForegroundColor White -BackgroundColor DarkRed
Write-Host "==========================================================" -ForegroundColor Red
