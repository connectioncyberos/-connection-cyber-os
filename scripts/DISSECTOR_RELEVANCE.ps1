# ==============================================================================
# PROJETO: ConnectionCyberOS
# SCRIPT: Dissector de Relevancia (Varredura Cirurgica de Codigo)
# OBJETIVO: Ocultar assets visuais e focar estritamente em codigo vital
# ==============================================================================

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   CONNECTION CYBER OS | DISSECTOR DE RELEVÂNCIA TÉCNICA  " -ForegroundColor White -BackgroundColor DarkBlue
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. RESOLUÇÃO DINÂMICA
if ($PSScriptRoot -match "scripts$") {
    $ProjectRoot = (Resolve-Path "$PSScriptRoot\..").Path
} elseif ($PSScriptRoot) {
    $ProjectRoot = $PSScriptRoot
} else {
    $ProjectRoot = (Resolve-Path .).Path
}

Write-Host "[PATH] Varrendo codigo vital em: $ProjectRoot`n" -ForegroundColor Gray

# 2. LISTA DE EXCLUSÃO (O "Lixo" Técnico e Assets Visuais)
$ExcludeList = @(
    "node_modules", ".next", ".turbo", "dist", "build", "out", ".vercel", ".git", ".github",
    "package-lock.json", "yarn.lock", "pnpm-lock.yaml", ".eslintcache", ".cache",
    "*.log", "npm-debug.log*", "yarn-error.log*",
    ".vscode", ".idea", ".DS_Store", "Thumbs.db", "__pycache__", ".venv",
    "*.png", "*.jpg", "*.jpeg", "*.svg", "*.webp", "*.ico", "*.gif", "*.mp4" # Ignora Imagens
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
            if ($Item.Extension -in ".ts", ".tsx", ".sql", ".prisma", ".mjs", ".js", ".py") {
                Write-Host "$Indent|---$($Item.Name)" -ForegroundColor White
            } else {
                Write-Host "$Indent|---$($Item.Name)" -ForegroundColor DarkGray
            }
        }
    }
}

# 3. EXECUÇÃO DA VARREDURA
if (Test-Path $ProjectRoot) {
    Get-RelevantTree -Path $ProjectRoot
} else {
    Write-Host "[ERRO] Diretório não encontrado: $ProjectRoot" -ForegroundColor Red
}

Write-Host "`n==========================================================" -ForegroundColor Cyan
Write-Host " [OK] MAPEAMENTO CIRÚRGICO CONCLUÍDO.                     " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan