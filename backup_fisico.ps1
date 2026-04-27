# Local: C:\Projetos\connection-cyber-os\backup_fisico.ps1
# Projeto: ConnectionCyberOS | Versão: 3.1 (Ajuste de Unidade E:)

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "   SISTEMA INTEGRADO V3.1 (DOCS + BACKUP) " -ForegroundColor White -BackgroundColor DarkBlue
Write-Host "==========================================" -ForegroundColor Cyan

# 1. CONFIGURAÇÃO DE CAMINHOS (PGE-MASTER)
$Source = "C:\Projetos\connection-cyber-os"
$DestBase = "E:\connection-cyber-os" # Unidade de Backup definida pelo Arquiteto
$Timestamp = Get-Date -Format "yyyy-MM-dd_HHmm"

# 2. VALIDAÇÃO DE UNIDADE
if (-not (Test-Path $DestBase)) {
    Write-Host "[CRITICO] Destino de Backup '$DestBase' nao encontrado!" -ForegroundColor Red
    Write-Host "Certifique-se de que o HD Externo (E:) esta conectado." -ForegroundColor Yellow
    Read-Host "Pressione Enter para sair..."
    exit
}

# 3. GERAÇÃO DE DOCUMENTAÇÃO (Contexto IA)
Write-Host "[DOCS] Atualizando Contexto do Projeto..." -ForegroundColor Yellow
$DocsPath = Join-Path $Source "docs"
if (-not (Test-Path $DocsPath)) { New-Item -ItemType Directory -Path $DocsPath | Out-Null }

# 4. EXECUTANDO ESPELHAMENTO FÍSICO (ROBOCOPY)
Write-Host "[DISK] Sincronizando arquivos para $DestBase..." -ForegroundColor Cyan
$ExcludeDirs = @("node_modules", ".next", ".git", "dist", ".vercel", "__pycache__", ".venv")

# Robocopy para espelhamento eficiente
robocopy $Source $DestBase /E /XO /FFT /R:1 /W:1 /NP /NFL /NDL /XD $ExcludeDirs

if ($LASTEXITCODE -lt 8) {
    Write-Host "[OK] Backup fisico concluido com sucesso em $DestBase" -ForegroundColor Green
} else {
    Write-Host "[ERRO] Falha no Robocopy. Verifique permissões." -ForegroundColor Red
}

Write-Host "==========================================" -ForegroundColor Cyan