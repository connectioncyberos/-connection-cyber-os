# Local: _SCRIPTS_UTIL\ensure-test-folders.ps1
# Projeto: ConnectionCyberOS

Set-Location -Path "C:\Projetos\connection-cyber-os"

$paths = @(
  "tests",
  "tests/core",
  "tests/security",
  "tests/performance",
  "tests/integration"
)

Write-Host "==========================================================" -ForegroundColor Magenta
Write-Host " [Verificando Estrutura de Testes...]" -ForegroundColor Cyan

foreach ($p in $paths) {
    if (-not (Test-Path $p)) {
        New-Item -ItemType Directory -Path $p | Out-Null
        Write-Host " [+] Criado: $p" -ForegroundColor Green
    } else {
        Write-Host " [ok] Ja existe: $p" -ForegroundColor Gray
    }
}

Write-Host "==========================================================" -ForegroundColor Magenta