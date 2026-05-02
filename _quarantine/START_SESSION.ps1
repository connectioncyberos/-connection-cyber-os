# ==============================================================================
# PROJETO: ConnectionCyberOS
# SCRIPT: Protocolo de Inicialização de Sessão (Alta Performance)
# ==============================================================================

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   CONNECTION CYBER OS | PROTOCOLO DE INICIALIZAÇÃO       " -ForegroundColor White -BackgroundColor DarkBlue
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. RESOLUÇÃO DINÂMICA DE DIRETÓRIOS (Governança Extremo Zero)
# Descobre a raiz independentemente de como o script foi invocado
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
    Write-Host "[SISTEMA] Contexto definido para: $WebPath" -ForegroundColor Gray
} else {
    Write-Host "[ERRO CRÍTICO] Diretório /web não encontrado em $ProjectRoot." -ForegroundColor Red
    exit
}

# 2. VALIDAÇÃO DE AMBIENTE (Security Check)
Write-Host "`n[ENV] Verificando integridade do ambiente..." -ForegroundColor Yellow
if (-not (Test-Path ".env.local")) {
    Write-Host "[ALERTA CRÍTICO] Arquivo .env.local não localizado! Conexão com Supabase falhará." -ForegroundColor Red
} else {
    Write-Host "[OK] Variáveis de ambiente (.env.local) seladas e prontas." -ForegroundColor Green
}

# 3. GESTÃO INTELIGENTE DE DEPENDÊNCIAS (DX Otimizado)
# Valida a presença da node_modules para evitar npm install desnecessário
if (-not (Test-Path "node_modules")) {
    Write-Host "`n[NPM] Dependências ausentes. Iniciando instalação limpa..." -ForegroundColor Yellow
    npm install --quiet
    Write-Host "[OK] Pacotes instalados com sucesso." -ForegroundColor Green
} else {
    Write-Host "[OK] Dependências (node_modules) já instaladas. Pulando npm install para boot rápido." -ForegroundColor Green
}

# Nota Arquitetural: Deleção da pasta .next foi removida para preservar o cache do Turbopack.

# 4. START DO MOTOR (Next.js + Turbopack)
Write-Host "`n[MOTOR] Inicializando o ecossistema ConnectionCyberOS..." -ForegroundColor Cyan
npm run dev