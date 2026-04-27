# Local: _SCRIPTS_UTIL\EXTRACT_DNA.ps1
# Projeto: ConnectionCyberOS
# Objetivo: Destacar componentes críticos (Schemas, Roteamento, IA)

Clear-Host
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$CurrentPath = "C:\Projetos\connection-cyber-os"
$ProjectName = "CONNECTION-CYBER-OS"

Write-Host "==========================================================" -ForegroundColor Magenta
Write-Host "       SCANNER DE DNA | PROJETO: [$ProjectName]  " -ForegroundColor White -BackgroundColor DarkMagenta
Write-Host "==========================================================" -ForegroundColor Magenta

$Exclude = @("node_modules", ".next", ".git", "dist", ".cache", "tmp")
$PriorityFolders = @("src", "lib", "utils", "components", "app")

function Get-ArchitecturalTree ($Path, $Indent = "") {
    $Items = Get-ChildItem -Path $Path | Where-Object { $Exclude -notcontains $_.Name } | Sort-Object PSIsContainer -Descending
    
    foreach ($Item in $Items) {
        if ($Item.PSIsContainer) {
            if ($PriorityFolders -contains $Item.Name.ToLower()) {
                Write-Host "$Indent+---[$($Item.Name)]/" -ForegroundColor White -BackgroundColor DarkCyan
            } else {
                Write-Host "$Indent+---$($Item.Name)/" -ForegroundColor Yellow
            }
            Get-ArchitecturalTree -Path $Item.FullName -Indent "$Indent|   "
        } else {
            if ($Item.Name -match "(schema|database|layout|page|middleware|proxy|server|actions)") {
                Write-Host "$Indent|---$($Item.Name) [ALVO CRÍTICO]" -ForegroundColor Green -BackgroundColor Black
            } else {
                Write-Host "$Indent|---$($Item.Name)" -ForegroundColor Gray
            }
        }
    }
}

Get-ArchitecturalTree -Path $CurrentPath
Write-Host "`n[OK] VARREDURA FINALIZADA." -ForegroundColor Green