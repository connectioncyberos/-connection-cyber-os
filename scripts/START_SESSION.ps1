# ==============================================================================
# PROJETO: ConnectionCyberOS
# SCRIPT: Protocolo de Inicialização de Sessão
# ==============================================================================

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   CONNECTION CYBER OS | PROTOCOLO DE INICIALIZAÇÃO       " -ForegroundColor White -BackgroundColor DarkBlue
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. RESOLUÇÃO DE DIRETÓRIOS
$ProjectRoot = (Resolve-Path "$PSScriptRoot\..").Path
Write-Host "[SISTEMA] Raiz do projeto: $ProjectRoot" -ForegroundColor Gray

$CorePath = Join-Path $ProjectRoot "core"
$PortalApiPath = Join-Path $ProjectRoot "portals\portal-api"
$PortalPublicPath = Join-Path $ProjectRoot "portals\portal-public"

# 2. VALIDAÇÃO
Write-Host ""
Write-Host "[VALIDAÇÃO] Verificando módulos..." -ForegroundColor Yellow

if (-not (Test-Path $CorePath)) { Write-Host "[ERRO] CORE não encontrado!" -ForegroundColor Red; exit }
if (-not (Test-Path $PortalApiPath)) { Write-Host "[ERRO] portal-api não encontrado!" -ForegroundColor Red; exit }
if (-not (Test-Path $PortalPublicPath)) { Write-Host "[ERRO] portal-public não encontrado!" -ForegroundColor Red; exit }

Write-Host "[OK] Todos os módulos localizados." -ForegroundColor Green

# 3. INICIALIZAÇÃO
Write-Host ""
Write-Host "[BOOT] Inicializando módulos..." -ForegroundColor Cyan

Start-Process powershell -ArgumentList "node src/server.js" -WorkingDirectory $CorePath
Start-Sleep -Seconds 1

Start-Process powershell -ArgumentList "node src/server.js" -WorkingDirectory $PortalApiPath
Start-Sleep -Seconds 1

Start-Process powershell -ArgumentList "npm run dev" -WorkingDirectory $PortalPublicPath
Start-Sleep -Seconds 1

Write-Host ""
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   TODOS OS MÓDULOS FORAM INICIALIZADOS COM SUCESSO        " -ForegroundColor White -BackgroundColor DarkBlue
Write-Host "==========================================================" -ForegroundColor Cyan
