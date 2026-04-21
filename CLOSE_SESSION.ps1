# ==============================================================================
# PROJETO: ConnectionCyberOS
# SCRIPT: Protocolo de Selagem de Sessao e Backup
# ==============================================================================

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "      CONNECTION CYBER OS | PROTOCOLO DE SELAGEM          " -ForegroundColor White -BackgroundColor DarkBlue
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. RESOLUÇÃO DINÂMICA
if ($PSScriptRoot -match "scripts$") {
    $ProjectRoot = (Resolve-Path "$PSScriptRoot\..").Path
} elseif ($PSScriptRoot) {
    $ProjectRoot = $PSScriptRoot
} else {
    $ProjectRoot = (Resolve-Path .).Path
}
Set-Location $ProjectRoot

# 2. PARADA CIRÚRGICA DE PROCESSOS (Fim do "Dano Colateral")
Write-Host "[PROCESS] Procurando servico na porta 3000..." -ForegroundColor Yellow

# Busca apenas o PID que está escutando na porta 3000
$PortProcess = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue

if ($PortProcess) {
    $PIDToKill = $PortProcess.OwningProcess
    Stop-Process -Id $PIDToKill -Force -ErrorAction SilentlyContinue
    Write-Host "[OK] Servidor Next.js (Porta 3000) encerrado com sucesso." -ForegroundColor Green
} else {
    Write-Host "[INFO] Nenhum serviço ativo encontrado na porta 3000. (Ja estava parado)" -ForegroundColor Gray
}

# 3. MENSAGEM DE COMMIT INTELIGENTE
Write-Host "`n[GIT] Preparando consolidacao do codigo..." -ForegroundColor Yellow
$Mensagem = Read-Host "Descreva a evolucao desta sessao (ex: 'feat: nova pagina de login' ou 'fix: cor do botao')"

if ([string]::IsNullOrWhiteSpace($Mensagem)) {
    $Mensagem = "chore(infra): atualizacao rotineira e selagem de ambiente"
}

git add .
git commit -m "$Mensagem"

# 4. INTEGRAÇÃO COM O BACKUP MESTRE (Reaproveitamento de Código)
Write-Host "`n[BACKUP] Acionando o Orquestrador Mestre de Backup..." -ForegroundColor Yellow
$BackupScript = Join-Path $ProjectRoot "scripts\Backup_Sistema_Integrado.ps1"

if (Test-Path $BackupScript) {
    # Chama o script mestre que testamos no Passo 1
    & $BackupScript
} else {
    Write-Host "[ERRO] Script de Backup Mestre não encontrado em $BackupScript" -ForegroundColor Red
    Write-Host "[GIT] Fazendo push de emergencia direto para o GitHub..." -ForegroundColor Yellow
    git push origin main
}

Write-Host "`n==========================================================" -ForegroundColor Cyan
Write-Host " [OK] SESSÃO ENCERRADA E BLINDADA COM SUCESSO." -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan