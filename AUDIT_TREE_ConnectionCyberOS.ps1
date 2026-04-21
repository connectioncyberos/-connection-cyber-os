# -------------------------------------------------------------------------
# PROJETO: CONNECTION CYBER OS
# ARQUIVO: C:\Projetos\connection-cyber-os\AUDIT_TREE_ConnectionCyberOS.ps1
# OBJETIVO: MAPEAMENTO DE ESTRUTURA PARA APRESENTAÇÃO
# -------------------------------------------------------------------------

Clear-Host
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "      CONNECTION CYBER OS | STATUS: PRODUÇÃO              " -ForegroundColor White -BackgroundColor DarkBlue
Write-Host "             AUDITORIA DE ESTRUTURA TÉCNICA              " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

$Exclude = @("node_modules", ".next", ".git", "package-lock.json", ".vercel")

function Get-CleanTree {
    param ([string]$Path = ".", [string]$Indent = "")
    $Items = Get-ChildItem -Path $Path | Where-Object { $Exclude -notcontains $_.Name } | Sort-Object PSIsContainer -Descending
    foreach ($Item in $Items) {
        if ($Item.PSIsContainer) {
            Write-Host "$Indent+---$($Item.Name)/" -ForegroundColor Yellow
            Get-CleanTree -Path $Item.FullName -Indent "$Indent|   "
        } else {
            Write-Host "$Indent|---$($Item.Name)" -ForegroundColor Gray
        }
    }
}

Get-CleanTree -Path "C:\Projetos\connection-cyber-os"
Write-Host "`nAUDITORIA CONCLUÍDA." -ForegroundColor Green