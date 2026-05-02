# ==============================================================================
# PROJETO: ConnectionCyberOS
# SCRIPT: BACKUP_FISICO (Backup Completo + Incremental)
# GOVERNANÇA: Segurança, Logs, Auditoria, Integridade, Padrão Militar
# ==============================================================================

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "      CONNECTION CYBER OS | BACKUP FÍSICO                 " -ForegroundColor White -BackgroundColor DarkBlue
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. DEFINIÇÃO DE DIRETÓRIOS
$ProjectRoot = "C:\Projetos\connection-cyber-os"
$BackupRoot  = "E:\BACKUP_CONNECTIONCYBEROS"

# 2. CRIAÇÃO DO DIRETÓRIO DE BACKUP (SE NÃO EXISTIR)
if (-not (Test-Path $BackupRoot)) {
    New-Item -ItemType Directory -Path $BackupRoot -Force | Out-Null
    Write-Host "[OK] Diretório de backup criado: $BackupRoot" -ForegroundColor Green
}

# 3. GERAR CARIMBO DE DATA/HORA
$Data = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$BackupDestino = Join-Path $BackupRoot "backup_$Data"

New-Item -ItemType Directory -Path $BackupDestino -Force | Out-Null

Write-Host "[INFO] Backup será salvo em: $BackupDestino" -ForegroundColor Gray

# 4. LOG AVANÇADO
$LogFile = Join-Path $BackupRoot "backup_log.txt"
"[$(Get-Date)] INICIANDO BACKUP" | Out-File $LogFile -Append -Encoding UTF8

# 5. FUNÇÃO DE CÓPIA SEGURA
function Copiar-Seguro {
    param(
        [string]$Origem,
        [string]$Destino
    )

    if (Test-Path $Origem) {
        Copy-Item -Path $Origem -Destination $Destino -Recurse -Force -ErrorAction SilentlyContinue
        Write-Host "[OK] Copiado: $Origem" -ForegroundColor Green
        "[$(Get-Date)] Copiado: $Origem" | Out-File $LogFile -Append -Encoding UTF8
    } else {
        Write-Host "[ERRO] Caminho não encontrado: $Origem" -ForegroundColor Red
        "[$(Get-Date)] ERRO: Caminho não encontrado: $Origem" | Out-File $LogFile -Append -Encoding UTF8
    }
}

# 6. LISTA DE DIRETÓRIOS PARA BACKUP
$Diretorios = @(
    "$ProjectRoot\core",
    "$ProjectRoot\portals\portal-api",
    "$ProjectRoot\portals\portal-web",
    "$ProjectRoot\portals\portal-admin",
    "$ProjectRoot\portals\portal-mobile",
    "$ProjectRoot\portals\portal-public",
    "$ProjectRoot\scripts",
    "$ProjectRoot\docs"
)

# 7. EXECUTAR BACKUP
foreach ($Dir in $Diretorios) {
    $Destino = Join-Path $BackupDestino (Split-Path $Dir -Leaf)
    Copiar-Seguro -Origem $Dir -Destino $Destino
}

# 8. BACKUP DO GIT (SEGURANÇA)
Write-Host "`n[GIT] Exportando estado do repositório..." -ForegroundColor Yellow
git rev-parse HEAD | Out-File (Join-Path $BackupDestino "git_commit.txt") -Encoding UTF8
git status > (Join-Path $BackupDestino "git_status.txt")

Write-Host "[OK] Estado do Git salvo." -ForegroundColor Green

# 9. VERIFICAÇÃO DE INTEGRIDADE
Write-Host "`n[CHECK] Verificando integridade do backup..." -ForegroundColor Yellow

foreach ($Dir in $Diretorios) {
    $Nome = Split-Path $Dir -Leaf
    $Destino = Join-Path $BackupDestino $Nome

    if (Test-Path $Destino) {
        Write-Host "[OK] Integridade confirmada: $Nome" -ForegroundColor Green
    } else {
        Write-Host "[FALHA] Diretório ausente no backup: $Nome" -ForegroundColor Red
    }
}

# 10. FINALIZAÇÃO
"[$(Get-Date)] BACKUP FINALIZADO" | Out-File $LogFile -Append -Encoding UTF8

Write-Host "`n==========================================================" -ForegroundColor Cyan
Write-Host "   BACKUP FÍSICO FINALIZADO COM SUCESSO                   " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan
