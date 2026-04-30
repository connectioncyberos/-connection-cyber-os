# Local: C:\Projetos\connection-cyber-os\CLOSE_SESSION.ps1
# Projeto: ConnectionCyberOS

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "      CONNECTION CYBER OS | PROTOCOLO DE SELAGEM          " -ForegroundColor White -BackgroundColor DarkBlue
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. RESOLUÇÃO DE DIRETÓRIO RAIZ
$ProjectRoot = "C:\Projetos\connection-cyber-os"
Set-Location $ProjectRoot

# 2. PARADA DO SERVIDOR NEXT.JS (PORTA 3000)
$PortProcess = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($PortProcess) {
    Stop-Process -Id $PortProcess.OwningProcess -Force -ErrorAction SilentlyContinue
    Write-Host "[OK] Servidor Next.js encerrado." -ForegroundColor Green
}

# 3. CONSOLIDAÇÃO GIT
Write-Host "`n[GIT] Preparando commit..." -ForegroundColor Yellow
$Mensagem = Read-Host "Evolucao da sessao"
if ([string]::IsNullOrWhiteSpace($Mensagem)) { $Mensagem = "chore(infra): selagem de ambiente e backup" }

git add .
git commit -m "$Mensagem"

# 4. DISPARO DO BACKUP FÍSICO (INTEGRAÇÃO CORRIGIDA)
Write-Host "`n[BACKUP] Acionando Backup Físico em Unidade E:..." -ForegroundColor Yellow
$BackupScript = Join-Path $ProjectRoot "backup_fisico.ps1"

if (Test-Path $BackupScript) {
    & $BackupScript
} else {
    Write-Host "[ERRO] Script backup_fisico.ps1 nao encontrado na raiz." -ForegroundColor Red
    Write-Host "[GIT] Fazendo push de emergencia..." -ForegroundColor Yellow
    git push origin main
}

Write-Host "`n[OK] SESSÃO ENCERRADA E BACKUP REALIZADO." -ForegroundColor Green