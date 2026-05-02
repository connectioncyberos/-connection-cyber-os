# ==============================================================================
# PROJETO: ConnectionCyberOS
# SCRIPT: Protocolo de Deep Purge (Limpeza Profunda de Cache e Modulos)
# OBJETIVO: Reset total de infraestrutura antes de Builds Criticos
# ==============================================================================

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "    CONNECTION CYBER OS | PROTOCOLO DE DEEP PURGE         " -ForegroundColor White -BackgroundColor DarkRed
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. RESOLUÇÃO DINÂMICA DE DIRETÓRIOS
if ($PSScriptRoot -match "scripts$") {
    $ProjectRoot = (Resolve-Path "$PSScriptRoot\..").Path
} elseif ($PSScriptRoot) {
    $ProjectRoot = $PSScriptRoot
} else {
    $ProjectRoot = (Resolve-Path .).Path
}

$WebPath = Join-Path $ProjectRoot "web"

if (Test-Path $WebPath) {
    Set-Location $WebPath
    Write-Host "[PATH] Operando no nucleo web: $WebPath" -ForegroundColor Gray
} else {
    Write-Host "[ERRO CRÍTICO] Diretório /web não encontrado em $ProjectRoot." -ForegroundColor Red
    exit
}

# 2. SEQUÊNCIA DE DESTRUIÇÃO CIRÚRGICA
Write-Host "`n[1/5] Destruindo Cache do Next.js (.next)..." -ForegroundColor Yellow
if (Test-Path ".next") { Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue }

Write-Host "[2/5] Destruindo Cache do Turbopack (.turbo)..." -ForegroundColor Yellow
if (Test-Path ".turbo") { Remove-Item -Recurse -Force .turbo -ErrorAction SilentlyContinue }

Write-Host "[3/5] Destruindo Cache do ESLint (.eslintcache)..." -ForegroundColor Yellow
if (Test-Path ".eslintcache") { Remove-Item -Force .eslintcache -ErrorAction SilentlyContinue }

Write-Host "[4/5] Destruindo Arvore de Dependencias (node_modules)..." -ForegroundColor Yellow
if (Test-Path "node_modules") { Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue }
if (Test-Path "package-lock.json") { Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue }

Write-Host "[5/5] Purgando Cache Global do NPM..." -ForegroundColor Yellow
npm cache clean --force

Write-Host "`n==========================================================" -ForegroundColor Cyan
Write-Host " [OK] AMBIENTE COMPLETAMENTE PURGADO E PRONTO PARA NOVO BUILD." -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan