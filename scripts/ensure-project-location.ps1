# Local: _SCRIPTS_UTIL\ensure-project-location.ps1
# Projeto: ConnectionCyberOS

$expected = "C:\Projetos\connection-cyber-os"
$current = Get-Location

if ($current.Path -ne $expected) {
    Write-Host "ALERTA: Diretorio incorreto detectado!" -ForegroundColor Red
    Write-Host "Mudando para o local de desenvolvimento oficial: $expected" -ForegroundColor Yellow
    Set-Location -Path $expected
}

Write-Host "==========================================================" -ForegroundColor Magenta
Write-Host " [OK] DIRETORIO CONFIRMADO: $expected" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Magenta