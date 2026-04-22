# ==============================================================================
# PROJETO: ConnectionCyberOS
# SCRIPT: Scanner de Ativos Arquiteturais (DNA)
# OBJETIVO: Destacar componentes críticos de arquitetura (Schemas, Roteamento, IA)
# ==============================================================================

Clear-Host
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# 1. RESOLUÇÃO DINÂMICA
if ($PSScriptRoot -match "scripts$") {
    $CurrentPath = (Resolve-Path "$PSScriptRoot\..").Path
} elseif ($PSScriptRoot) {
    $CurrentPath = $PSScriptRoot
} else {
    $CurrentPath = (Resolve-Path .).Path
}

$ProjectName = (Get-Item $CurrentPath).Name.ToUpper()

Write-Host "==========================================================" -ForegroundColor Magenta
Write-Host "       SCANNER DE DNA ARQUITETURAL | PROJETO: [$ProjectName]  " -ForegroundColor White -BackgroundColor DarkMagenta
Write-Host "       ALVO: MAPEAMENTO DE ESTRUTURAS CRÍTICAS            " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Magenta

# 2. HEURÍSTICA DE FILTRAGEM
$Exclude = @("node_modules", ".next", ".turbo", ".git", "dist", ".cache", "tmp", ".vercel", "__pycache__", ".venv")

# Pastas que ganham destaque (Cor Azul/Branco)
$PriorityFolders = @("src", "lib", "models", "types", "schemas", "database", "backend", "web", "app", "components")

function Get-ArchitecturalTree {
    param ([string]$Path, [string]$Indent = "")
    
    $Items = Get-ChildItem -Path $Path | Where-Object { $Exclude -notcontains $_.Name } | Sort-Object PSIsContainer -Descending
    
    foreach ($Item in $Items) {
        $Color = "Gray"
        if ($Item.PSIsContainer) {
            # Destacar pastas prioritárias que contêm o "DNA" do sistema
            if ($PriorityFolders -contains $Item.Name.ToLower()) {
                Write-Host "$Indent+---[$($Item.Name)]/" -ForegroundColor White -BackgroundColor DarkCyan
            } else {
                Write-Host "$Indent+---$($Item.Name)/" -ForegroundColor Yellow
            }
            Get-ArchitecturalTree -Path $Item.FullName -Indent "$Indent|   "
        } else {
            # Sinalizar arquivos críticos de Banco de Dados, Tipagem e Roteamento
            if ($Item.Name -match "(schema\.prisma|database\.ts|layout\.tsx|page\.tsx|middleware\.ts|proxy\.ts|server\.ts|ai_core\.py)") {
                Write-Host "$Indent|---$($Item.Name) [ALVO CRÍTICO]" -ForegroundColor Green -BackgroundColor Black
            } else {
                # Se não for crítico, pinta de cinza para não poluir a visão
                Write-Host "$Indent|---$($Item.Name)" -ForegroundColor Gray
            }
        }
    }
}

# 3. EXECUÇÃO
Get-ArchitecturalTree -Path $CurrentPath
Write-Host "`n==========================================================" -ForegroundColor Magenta
Write-Host " [OK] VARREDURA DO PROJETO $ProjectName FINALIZADA.       " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Magenta