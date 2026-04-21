# ==============================================================================
# PROJETO: ConnectionCyberOS
# SCRIPT: Backup Sistema Integrado (Físico + Nuvem + Git)
# ==============================================================================

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "     CONNECTION CYBER OS | PROTOCOLO DE BACKUP MESTRE     " -ForegroundColor White -BackgroundColor DarkBlue
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. RESOLUÇÃO DINÂMICA DE DIRETÓRIOS (Governança Extremo Zero)
# Captura a raiz independentemente de estar na raiz ou na pasta scripts.
# Se o script rodar dentro de /scripts, ele aponta para a pasta pai (raiz do projeto)
if ($PSScriptRoot -match "scripts$") {
    $ProjectRoot = (Resolve-Path "$PSScriptRoot\..").Path
} else {
    $ProjectRoot = (Resolve-Path .).Path
}

Write-Host "[SISTEMA] Raiz do projeto identificada: $ProjectRoot" -ForegroundColor Gray

# 2. DEFINIÇÃO DE BASES DE DESTINO (Conforme Documentação Oficial)
$BaseFisico = "E:\connection-cyber-os"
$BaseNuvem  = "C:\Users\joaqu\OneDrive\ProjetosBackup\connection-cyber-os"

$DiaDoMes = (Get-Date).Day

# 3. LÓGICA PAR / ÍMPAR (Para Físico e Nuvem)
if ($DiaDoMes % 2 -eq 0) {
    $DestFisico = "$BaseFisico\par\connection-cyber-os"
    $DestNuvem  = "$BaseNuvem\par\connection-cyber-os"
    Write-Host "[INFO] Ciclo PAR ($DiaDoMes). Roteamento ajustado." -ForegroundColor Cyan
} else {
    $DestFisico = "$BaseFisico\impar\connection-cyber-os"
    $DestNuvem  = "$BaseNuvem\impar\connection-cyber-os"
    Write-Host "[INFO] Ciclo ÍMPAR ($DiaDoMes). Roteamento ajustado." -ForegroundColor Cyan
}

# 4. CRIAÇÃO DE DIRETÓRIOS (Garante a existência da infraestrutura)
if (-not (Test-Path $DestFisico)) { New-Item -Path $DestFisico -ItemType Directory -Force | Out-Null }
if (-not (Test-Path $DestNuvem)) { New-Item -Path $DestNuvem -ItemType Directory -Force | Out-Null }

# 5. HIGIENE DE DADOS (Filtro de Lixo Técnico)
$ExcludeDirs = @("node_modules", ".next", ".turbo", ".git", "dist", "build", "out", ".vercel", "__pycache__", ".venv")

Write-Host "`n[RUN] Iniciando espelhamento (Robocopy Multi-thread)..." -ForegroundColor Yellow

# Robocopy para Desempenho Extremo
# /E (Subpastas), /Z (Reiniciável), /MT:8 (Multi-thread), /XD (Excluir diretórios)
robocopy $ProjectRoot $DestFisico /E /Z /R:3 /W:3 /MT:8 /XD $ExcludeDirs /NDL /NFL /NP
if ($LASTEXITCODE -lt 8) { Write-Host "[SUCESSO] Backup Físico (Drive E:\) Concluído." -ForegroundColor Green } else { Write-Host "[ERRO] Falha no Backup Físico." -ForegroundColor Red }

robocopy $ProjectRoot $DestNuvem /E /Z /R:3 /W:3 /MT:8 /XD $ExcludeDirs /NDL /NFL /NP
if ($LASTEXITCODE -lt 8) { Write-Host "[SUCESSO] Backup Nuvem (OneDrive) Concluído." -ForegroundColor Green } else { Write-Host "[ERRO] Falha no Backup Nuvem." -ForegroundColor Red }

# 6. SINCRONIZAÇÃO GITHUB
Write-Host "`n[GIT] Sincronizando com repositório remoto (ConnectionCyberOS)..." -ForegroundColor Yellow
Set-Location -Path $ProjectRoot
git add .
git commit -m "chore(backup): Blindagem e Backup do Sistema Integrado"
git push origin main

Write-Host "`n==========================================================" -ForegroundColor Cyan
Write-Host "       PROTOCOLO DE BACKUP FINALIZADO COM SUCESSO!        " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan