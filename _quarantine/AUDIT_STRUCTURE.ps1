# ==============================================================================
# PROJETO: ConnectionCyberOS
# SCRIPT: Auditoria de Estrutura de Arquivos (Quantitativa)
# ==============================================================================

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   CONNECTION CYBER OS | AUDITORIA DE ESTRUTURA           " -ForegroundColor White -BackgroundColor DarkBlue
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. RESOLUÇÃO DINÂMICA DE DIRETÓRIOS
if ($PSScriptRoot -match "scripts$") {
    $ProjectRoot = (Resolve-Path "$PSScriptRoot\..").Path
} elseif ($PSScriptRoot) {
    $ProjectRoot = $PSScriptRoot
} else {
    $ProjectRoot = (Resolve-Path .).Path
}

$WebPath = Join-Path $ProjectRoot "web"
$SrcPath = Join-Path $WebPath "src"

# 2. VARREDURA E FORMATAÇÃO VISUAL
if (Test-Path $SrcPath) {
    Set-Location $WebPath
    Write-Host "[PATH] Auditando nucleo de codigo fonte em: $SrcPath`n" -ForegroundColor Gray
    
    # O filtro de limpeza visual agora é calculado dinamicamente
    $BaseRemoval = "$WebPath\"
    
    Get-ChildItem -Path "src" -Recurse | 
    Where-Object { $_.PSIsContainer -eq $false } | 
    Select-Object @{Name="Caminho Relativo"; Expression={$_.FullName.Replace($BaseRemoval, "")}}, 
                  @{Name="Tamanho(KB)"; Expression={[math]::round($_.Length / 1KB, 2)}}, 
                  @{Name="Ultima Modificacao"; Expression={$_.LastWriteTime.ToString("dd/MM/yyyy HH:mm:ss")}} | 
    Format-Table -AutoSize
    
    Write-Host "`n[OK] Auditoria Quantitativa Concluida." -ForegroundColor Green
} else {
    Write-Host "[ERRO] Pasta 'src' nao encontrada em $WebPath." -ForegroundColor Red
}