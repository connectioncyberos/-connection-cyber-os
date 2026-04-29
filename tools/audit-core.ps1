# ============================================================
# ConnectionCyberOS - CORE Audit Script
# Auditoria corporativa completa do CORE
# ============================================================

$rootPath   = "C:\Projetos\connection-cyber-os"
$corePath   = Join-Path $rootPath "core"
$backupRoot = Join-Path $rootPath "_backup"
$timestamp  = Get-Date -Format "yyyyMMdd-HHmmss"
$auditPath  = Join-Path $rootPath "audit"
$auditFile  = Join-Path $auditPath "core-audit-$timestamp.log"

# ------------------------------------------------------------
# 1. Preparação de ambiente
# ------------------------------------------------------------
if (-not (Test-Path $auditPath)) {
    New-Item -ItemType Directory -Path $auditPath -Force | Out-Null
}

"============================================================" | Out-File $auditFile
"CORE AUDIT - $timestamp"                                      | Out-File $auditFile -Append
"Root: $rootPath"                                              | Out-File $auditFile -Append
"Core: $corePath"                                              | Out-File $auditFile -Append
"============================================================" | Out-File $auditFile -Append
""                                                             | Out-File $auditFile -Append

# ------------------------------------------------------------
# 2. Módulos esperados do CORE
# ------------------------------------------------------------
$expectedModules = @(
    "audit",
    "cache",
    "config",
    "context",
    "crypto",
    "errors",
    "events",
    "health",
    "identity",
    "layout",
    "logs",
    "mail",
    "navigation",
    "providers",
    "queue",
    "security",
    "session",
    "sms",
    "storage",
    "system"
)

"== MÓDULOS ESPERADOS =="        | Out-File $auditFile -Append
$expectedModules -join ", "      | Out-File $auditFile -Append
""                               | Out-File $auditFile -Append

# ------------------------------------------------------------
# 3. Validação de existência dos módulos
# ------------------------------------------------------------
Set-Location -Path $corePath

"== VALIDAÇÃO DE PASTAS DO CORE ==" | Out-File $auditFile -Append

$existingModules = Get-ChildItem -Directory | Select-Object -ExpandProperty Name

foreach ($module in $expectedModules) {
    if ($existingModules -contains $module) {
        "[OK] Módulo encontrado: $module" | Out-File $auditFile -Append
    } else {
        "[FALHA] Módulo AUSENTE: $module" | Out-File $auditFile -Append
    }
}

"" | Out-File $auditFile -Append

# ------------------------------------------------------------
# 4. Arquivos esperados por módulo
# ------------------------------------------------------------
$expectedFiles = @{
    "default" = @(
        "{0}.config.json",
        "{0}.schema.json",
        "{0}.types.ts",
        "{0}.service.ts",
        "{0}.middleware.ts",
        "{0}.routes.ts",
        "{0}.audit.log"
    )
}

"== VALIDAÇÃO DE ARQUIVOS POR MÓDULO ==" | Out-File $auditFile -Append

foreach ($module in $expectedModules) {
    $modulePath = Join-Path $corePath $module

    if (-not (Test-Path $modulePath)) {
        "[SKIP] Módulo não encontrado (sem arquivos): $module" | Out-File $auditFile -Append
        continue
    }

    "" | Out-File $auditFile -Append
    "MÓDULO: $module" | Out-File $auditFile -Append
    "Caminho: $modulePath" | Out-File $auditFile -Append

    $patternFiles = $expectedFiles["default"] | ForEach-Object { $_ -f $module }
    $existing = Get-ChildItem -Path $modulePath | Select-Object -ExpandProperty Name

    foreach ($file in $patternFiles) {
        if ($existing -contains $file) {
            "  [OK] Arquivo encontrado: $file" | Out-File $auditFile -Append
        } else {
            "  [FALHA] Arquivo AUSENTE: $file" | Out-File $auditFile -Append
        }
    }
}

"" | Out-File $auditFile -Append

# ------------------------------------------------------------
# 5. Hash de integridade dos arquivos críticos
# ------------------------------------------------------------
"== HASH DE INTEGRIDADE (service + middleware + schema + config) ==" | Out-File $auditFile -Append

foreach ($module in $expectedModules) {
    $modulePath = Join-Path $corePath $module
    if (-not (Test-Path $modulePath)) { continue }

    "" | Out-File $auditFile -Append
    "MÓDULO: $module" | Out-File $auditFile -Append

    $criticalPatterns = @(
        "{0}.service.ts",
        "{0}.middleware.ts",
        "{0}.schema.json",
        "{0}.config.json"
    ) | ForEach-Object { $_ -f $module }

    foreach ($pattern in $criticalPatterns) {
        $filePath = Join-Path $modulePath $pattern
        if (Test-Path $filePath) {
            $hash = Get-FileHash $filePath
            "  [HASH] $pattern  ->  $($hash.Hash)" | Out-File $auditFile -Append
        } else {
            "  [SKIP] Arquivo não encontrado para hash: $pattern" | Out-File $auditFile -Append
        }
    }
}

"" | Out-File $auditFile -Append

# ------------------------------------------------------------
# 6. Registro final
# ------------------------------------------------------------
"============================================================" | Out-File $auditFile -Append
"FIM DA AUDITORIA DO CORE - $timestamp"                       | Out-File $auditFile -Append
"Arquivo de auditoria: $auditFile"                            | Out-File $auditFile -Append
"============================================================" | Out-File $auditFile -Append

Write-Host "Auditoria do CORE concluída."
Write-Host "Log gerado em: $auditFile"
