import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ==============================================================================
// PROJETO: ConnectionCyberOS
// SCRIPT: Motor de Snapshot de Contexto (O Cérebro da IA)
// OBJETIVO: Gerar arquivo Markdown puro com código vital para injetar em LLMs
// ==============================================================================

const __filename = fileURLToPath(import.meta.url);
const rootDir = process.cwd();
const projectName = path.basename(rootDir).toUpperCase();

console.log(`\n==========================================================`);
console.log(`   CONNECTION CYBER OS | GERADOR DE SNAPSHOT PARA IA      `);
console.log(`==========================================================`);
console.log(`[SYS] Raiz detectada: ${rootDir}`);

// 1. REGRAS DE HIGIENE (Extremo Zero)
const excludeDirs = ['node_modules', '.next', '.turbo', '.git', '.github', 'dist', 'build', 'out', '.vercel', '__pycache__', '.venv', '_database_dumps'];
const excludeFiles = ['package-lock.json', 'yarn.lock', '.eslintcache', '.DS_Store', 'thumbs.db'];
const excludeExts = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp', '.mp4', '.pdf', '.zip', '.exe'];

// 2. CONFIGURAÇÃO DE SAÍDA
const docsPath = path.join(rootDir, 'docs');
const outputPath = path.join(docsPath, 'FULL_PROJECT_CONTEXT.md');

if (!fs.existsSync(docsPath)) {
    fs.mkdirSync(docsPath, { recursive: true });
}

let markdownContent = `# SNAPSHOT DE CONTEXTO: ${projectName}\n> Gerado em: ${new Date().toLocaleString('pt-BR')}\n> Arquitetura: Next.js 16 (App Router), Tailwind, Supabase\n\n---\n\n`;

// 3. MOTOR DE VARREDURA
function walkDir(currentPath) {
    let results = [];
    const list = fs.readdirSync(currentPath);

    list.forEach(file => {
        const fullPath = path.join(currentPath, file);
        const stat = fs.statSync(fullPath);
        const ext = path.extname(file).toLowerCase();

        if (stat && stat.isDirectory()) {
            if (!excludeDirs.includes(file)) {
                results = results.concat(walkDir(fullPath));
            }
        } else {
            if (!excludeFiles.includes(file) && !excludeExts.includes(ext)) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

console.log(`[RUN] Escaneando ecossistema, filtrando lixo técnico e assets visuais...`);

try {
    const files = walkDir(rootDir);
    let processedCount = 0;

    files.forEach(filePath => {
        // Ignora o próprio script e scripts de infra do powershell para focar só no código app
        if (filePath === __filename || filePath.endsWith('.ps1')) return;

        const relativePath = path.relative(rootDir, filePath);
        const ext = path.extname(filePath).replace('.', '') || 'txt';
        
        // Mapeamento de sintaxe Markdown
        let mdLang = ext;
        if (ext === 'tsx' || ext === 'ts') mdLang = 'typescript';
        if (ext === 'jsx' || ext === 'js' || ext === 'mjs') mdLang = 'javascript';
        if (ext === 'py') mdLang = 'python';

        try {
            const content = fs.readFileSync(filePath, 'utf8');
            markdownContent += `## FILE: \\${relativePath}\n\`\`\`${mdLang}\n${content}\n\`\`\`\n\n---\n\n`;
            processedCount++;
        } catch (err) {
            console.warn(`[AVISO] Arquivo ignorado (falha de leitura): ${relativePath}`);
        }
    });

    fs.writeFileSync(outputPath, markdownContent, 'utf8');
    
    console.log(`\n==========================================================`);
    console.log(` [OK] SNAPSHOT GERADO COM SUCESSO!`);
    console.log(` [INFO] Arquivos processados: ${processedCount}`);
    console.log(` [DESTINO] ${outputPath}`);
    console.log(`==========================================================\n`);

} catch (error) {
    console.error(`\n[ERRO CRÍTICO] Falha ao gerar snapshot:`, error);
}