# -------------------------------------------------------------------------
# PROJETO: CONNECTION CYBER OS - MODULE DISSECTOR
# ARQUIVO: DISSECTOR_RELEVANCE.ps1
# OBJETIVO: VARREDURA CIRÚRGICA DE ARQUIVOS VITAIS (SEM RUÍDO)
# -------------------------------------------------------------------------

param (
    [string]$ProjectPath = "C:\Projetos\Igrejas-Web-os" # Altere conforme o local
)

Clear-Host
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$ProjectName = (Get-Item $ProjectPath).Name
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "       ANALISADOR TÉCNICO | PROJETO: [$ProjectName]        " -ForegroundColor White -BackgroundColor DarkBlue
Write-Host "           MAPEAMENTO DE INTELIGÊNCIA VITAL              " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# REGRA DE OURO: LISTA DE EXCLUSÃO (O "LIXO" TÉCNICO)
$ExcludeList = @(
    "node_modules", ".next", "dist", "build", "out", ".vercel", ".git", ".github",
    "package-lock.json", "yarn.lock", "pnpm-lock.yaml", ".eslintcache", ".cache",
    "*.log", "npm-debug.log*", "yarn-error.log*",
    ".vscode", ".idea", ".DS_Store", "Thumbs.db",
    ".env", ".env.local", ".env.production", ".env.test",
    "favicon.ico", "*.png", "*.jpg", "*.svg", "*.webp" # Ignorando assets para focar no código
)

function Get-RelevantTree {
    param ([string]$Path, [string]$Indent = "")
    
    # Busca itens ignorando a lista de exclusão
    $Items = Get-ChildItem -Path $Path | Where-Object { 
        $itemName = $_.Name
        $isMatch = $false
        foreach ($pattern in $ExcludeList) {
            if ($itemName -like $pattern) { $isMatch = $true; break }
        }
        -not $isMatch
    } | Sort-Object PSIsContainer -Descending

    foreach ($Item in $Items) {
        if ($Item.PSIsContainer) {
            Write-Host "$Indent+---$($Item.Name)/" -ForegroundColor Yellow
            Get-RelevantTree -Path $Item.FullName -Indent "$Indent|   "
        } else {
            # Destaque para arquivos de Lógica e Dados (Ouro Técnico)
            if ($Item.Extension -in ".ts", ".tsx", ".sql", ".prisma", ".mjs", ".js") {
                Write-Host "$Indent|---$($Item.Name)" -ForegroundColor White
            } else {
                Write-Host "$Indent|---$($Item.Name)" -ForegroundColor Gray
            }
        }
    }
}

# Execução da Varredura
if (Test-Path $ProjectPath) {
    Get-RelevantTree -Path $ProjectPath
} else {
    Write-Host "ERRO: Caminho não encontrado: $ProjectPath" -ForegroundColor Red
}

Write-Host "`nVARREDURA DE RELEVÂNCIA CONCLUÍDA." -ForegroundColor Green
Write-Host "Foco: Lógica de Negócio, Schemas e Configurações Essenciais." -ForegroundColor Cyan