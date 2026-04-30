# ==============================================================================
# PROJETO: ConnectionCyberOS
# SCRIPT: Auditoria de Estrutura Visual (ASCII Tree)
# OBJETIVO: Mapeamento limpo da arquitetura, ignorando lixo de compilação
# ==============================================================================

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "     CONNECTION CYBER OS | AUDITORIA DE ÁRVORE ASCII      " -ForegroundColor White -BackgroundColor DarkBlue
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. RESOLUÇÃO DINÂMICA
if ($PSScriptRoot -match "scripts$") {
    $ProjectRoot = (Resolve-Path "$PSScriptRoot\..").Path
} elseif ($PSScriptRoot) {
    $ProjectRoot = $PSScriptRoot
} else {
    $ProjectRoot = (Resolve-Path .).Path
}

Write-Host "[PATH] Gerando arvore estrutural para: $ProjectRoot`n" -ForegroundColor Gray

# 2. FILTRO DE HIGIENE (Extremo Zero)
$Exclude = @(
    "node_modules", ".next", ".turbo", ".git", ".github",
    "package-lock.json", ".vercel", "dist", "build", "out",
    ".DS_Store", "thumbs.db", "__pycache__", ".venv"
)

function Get-CleanTree {
    param (
        [string]$Path = ".",
        [string]$Indent = ""
    )
    
    # Obtém itens filtrados e ordenados (pastas primeiro)
    $Items = Get-ChildItem -Path $Path | 
             Where-Object { $Exclude -notcontains $_.Name } | 
             Sort-Object PSIsContainer -Descending
    
    foreach ($Item in $Items) {
        if ($Item.PSIsContainer) {
            # Renderiza Pasta com padrão ASCII seguro e cor amarela
            Write-Host "$Indent+---$($Item.Name)/" -ForegroundColor Yellow
            
            # Recorrência para subpastas
            Get-CleanTree -Path $Item.FullName -Indent "$Indent|   "
        } else {
            # Renderiza Arquivo com padrão ASCII seguro
            Write-Host "$Indent|---$($Item.Name)" -ForegroundColor Gray
        }
    }
}

# 3. EXECUÇÃO
Get-CleanTree -Path $ProjectRoot

Write-Host "`n==========================================================" -ForegroundColor Cyan
Write-Host " [OK] MAPEAMENTO VISUAL CONCLUÍDO COM SUCESSO.            " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan