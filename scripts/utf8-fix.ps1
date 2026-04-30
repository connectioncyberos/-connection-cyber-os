# Local: _SCRIPTS_UTIL\utf8-fix.ps1
# Projeto: ConnectionCyberOS
# Função: Forçar PowerShell a usar UTF-8 real para logs de auditoria

Set-ItemProperty HKCU:\Console\%SystemRoot%_system32_WindowsPowerShell_v1.0_powershell.exe -Name CodePage -Value 65001
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "==========================================================" -ForegroundColor Magenta
Write-Host " [OK] POWERSHELL CONFIGURADO PARA UTF-8 (CONNECTION-CYBER-OS)" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Magenta