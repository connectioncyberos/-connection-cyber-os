# ============================================================
# ConnectionCyberOS - CORE Backup Comparison Audit Script
# Auditoria corporativa completa entre CORE ativo e BACKUP
# ============================================================

$rootPath      = "C:\Projetos\connection-cyber-os"
$coreActive    = Join-Path $rootPath "core"
$backupRoot    = Join-Path $rootPath "_backup"

# Seleciona o backup mais recente automaticamente
$latestBackup  = Get-ChildItem -Path $backupRoot -Directory |
                 Sort-Object LastWriteTime -Descending |
                 Select-Object -First 1

$coreBackup    = Join-Path $latestBackup.FullName "core"

$timestamp     = Get-Date -Format "yyyyMMdd-HHmmss"
$auditPath     = Join-Path $rootPath "audit"
$auditFile     = Join-Path $auditPath "core-compare-$timestamp.log"

# ------------------------------------------------------------
# 1. Preparação
# ------------------------------------------------------------
if (-not (Test-Path $auditPath)) {
    New-Item -ItemType Directory -Path $auditPath -Force | Out-Null
}

"============================================================" | Out-File $auditFile
"CORE BACKUP COMPARISON AUDIT - $timestamp"                   | Out-File $auditFile -Append
"Ativo:   $coreActive"                                        | Out-File $auditFile -Append
"Backup:  $coreBackup"                                        | Out-File $auditFile -Append
"============================================================" | Out-File $auditFile -Append
""                                                             | Out-File $auditFile -Append

# ------------------------------------------------------------
# 2. Módulos esperados
# ------------------------------------------------------------
$expectedModules = @(
    "audit","cache","config","context","crypto","errors","events","health",
    "identity","layout","logs","mail","navigation","providers","queue",
    "security","session","sms","storage","system"
)

"== MÓDULOS ESPERADOS ==" | Out-File $auditFile -Append
$expectedModules -join ", " | Out-File $auditFile -Append
"" | Out-File $auditFile -Append

# ------------------------------------------------------------
# 3. Comparação de módulos
# ------------------------------------------------------------
"== COMPARAÇÃO DE PASTAS DO CORE ==" | Out-File $auditFile -Append

$activeModules = Get-ChildItem -Path $coreActive -Directory | Select-Object -ExpandProperty Name
$backupModules = Get-ChildItem -Path $coreBackup -Directory | Select-Object -ExpandProperty Name

foreach ($module in $expectedModules) {
    $activeOK = $activeModules -contains $module
    $backupOK = $backupModules -contains $module

    if ($activeOK -and $backupOK) {
        "[OK] Módulo presente em ambos: $module" | Out-File $auditFile -Append
    }
    elseif ($activeOK -and -not $backupOK) {
        "[FALHA] Módulo existe no ativo mas NÃO no backup: $module" | Out-File $auditFile -Append
    }
    elseif (-not $activeOK -and $backupOK) {
        "[FALHA] Módulo existe no backup mas NÃO no ativo: $module" | Out-File $auditFile -Append
    }
    else {
        "[CRÍTICO] Módulo ausente em ambos: $module" | Out-File $auditFile -Append
    }
}

"" | Out-File $auditFile -Append

# ------------------------------------------------------------
# 4. Arquivos esperados por módulo
# ------------------------------------------------------------
$expectedFiles = @(
    "{0}.config.json",
    "{0}.schema.json",
    "{0}.types.ts",
    "{0}.service.ts",
    "{0}.middleware.ts",
    "{0}.routes.ts",
    "{0}.audit.log"
)

"== COMPARAÇÃO DE ARQUIVOS POR MÓDULO ==" | Out-File $auditFile -Append

foreach ($module in $expectedModules) {

    "" | Out-File $auditFile -Append
    "MÓDULO: $module" | Out-File $auditFile -Append

    $activePath = Join-Path $coreActive $module
    $backupPath = Join-Path $coreBackup $module

    if (-not (Test-Path $activePath)) {
        "[SKIP] Módulo ausente no ativo" | Out-File $auditFile -Append
        continue
    }
    if (-not (Test-Path $backupPath)) {
        "[SKIP] Módulo ausente no backup" | Out-File $auditFile -Append
        continue
    }

    foreach ($filePattern in $expectedFiles) {
        $fileName = $filePattern -f $module

        $activeFile = Join-Path $activePath $fileName
        $backupFile = Join-Path $backupPath $fileName

        $activeExists = Test-Path $activeFile
        $backupExists = Test-Path $backupFile

        if ($activeExists -and $backupExists) {
            "[OK] Arquivo presente em ambos: $fileName" | Out-File $auditFile -Append
        }
        elseif ($activeExists -and -not $backupExists) {
            "[FALHA] Arquivo só no ativo: $fileName" | Out-File $auditFile -Append
        }
        elseif (-not $activeExists -and $backupExists) {
            "[FALHA] Arquivo só no backup: $fileName" | Out-File $auditFile -Append
        }
        else {
            "[CRÍTICO] Arquivo ausente em ambos: $fileName" | Out-File $auditFile -Append
        }
    }
}

"" | Out-File $auditFile -Append

# ------------------------------------------------------------
# 5. Comparação de HASH (integridade real)
# ------------------------------------------------------------
"== COMPARAÇÃO DE HASH (service + middleware + schema + config) ==" | Out-File $auditFile -Append

$criticalPatterns = @(
    "{0}.service.ts",
    "{0}.middleware.ts",
    "{0}.schema.json",
    "{0}.config.json"
)

foreach ($module in $expectedModules) {

    "" | Out-File $auditFile -Append
    "MÓDULO: $module" | Out-File $auditFile -Append

    $activePath = Join-Path $coreActive $module
    $backupPath = Join-Path $coreBackup $module

    foreach ($pattern in $criticalPatterns) {
        $fileName = $pattern -f $module

        $activeFile = Join-Path $activePath $fileName
        $backupFile = Join-Path $backupPath $fileName

        if ((Test-Path $activeFile) -and (Test-Path $backupFile)) {

            $activeHash = (Get-FileHash $activeFile).Hash
            $backupHash = (Get-FileHash $backupFile).Hash

            if ($activeHash -eq $backupHash) {
                "  [OK] Hash idêntico: $fileName" | Out-File $auditFile -Append
            } else {
                "  [DIFERENTE] Hash divergente: $fileName" | Out-File $auditFile -Append
                "     Ativo:  $activeHash" | Out-File $auditFile -Append
                "     Backup: $backupHash" | Out-File $auditFile -Append
            }
        }
        else {
            "  [SKIP] Arquivo ausente para comparação: $fileName" | Out-File $auditFile -Append
        }
    }
}

"" | Out-File $auditFile -Append

# ------------------------------------------------------------
# 6. Finalização
# ------------------------------------------------------------
"============================================================" | Out-File $auditFile -Append
"FIM DA AUDITORIA DE COMPARAÇÃO - $timestamp"                 | Out-File $auditFile -Append
"Arquivo gerado: $auditFile"                                  | Out-File $auditFile -Append
"============================================================" | Out-File $auditFile -Append

Write-Host "Auditoria de comparação concluída."
Write-Host "Relatório: $auditFile"
