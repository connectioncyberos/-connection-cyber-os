# 🧭 CONTEXT SNAPSHOT: Módulo [FRONTEND]
**Projeto:** VaultMindOS
**Gerado em:** 18/04/2026, 22:07:44
**Total de Arquivos nesta Partição:** 10

---

================================================================================
📁 ARQUIVO: frontend/.gitignore
🛠️ EXTENSÃO: (Sem extensão)
📏 TAMANHO: 277 Bytes
🕒 ÚLTIMA MODIFICAÇÃO: 20/01/2026, 09:17:52
================================================================================

```(Sem extensão)
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

================================================================================
📁 ARQUIVO: frontend/eslint.config.js
🛠️ EXTENSÃO: .js
📏 TAMANHO: 787 Bytes
🕒 ÚLTIMA MODIFICAÇÃO: 20/01/2026, 09:17:52
================================================================================

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])

```

================================================================================
📁 ARQUIVO: frontend/index.html
🛠️ EXTENSÃO: .html
📏 TAMANHO: 370 Bytes
🕒 ÚLTIMA MODIFICAÇÃO: 20/01/2026, 09:17:52
================================================================================

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

================================================================================
📁 ARQUIVO: frontend/package.json
🛠️ EXTENSÃO: .json
📏 TAMANHO: 799 Bytes
🕒 ÚLTIMA MODIFICAÇÃO: 20/01/2026, 09:17:52
================================================================================

```json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.13.2",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-markdown": "^10.1.0",
    "remark-gfm": "^4.0.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "vite": "npm:rolldown-vite@7.2.5"
  },
  "overrides": {
    "vite": "npm:rolldown-vite@7.2.5"
  }
}

```

================================================================================
📁 ARQUIVO: frontend/README.md
🛠️ EXTENSÃO: .md
📏 TAMANHO: 1.15 KB
🕒 ÚLTIMA MODIFICAÇÃO: 20/01/2026, 09:17:52
================================================================================

```md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```

================================================================================
📁 ARQUIVO: frontend/src/App.css
🛠️ EXTENSÃO: .css
📏 TAMANHO: 1.84 KB
🕒 ÚLTIMA MODIFICAÇÃO: 20/01/2026, 09:17:52
================================================================================

```css
/* Reset básico */
* { box-sizing: border-box; }
body { margin: 0; padding: 0; overflow: hidden; }

/* Animação do botão de anexo */
button:active { transform: scale(0.95); }

/* Scrollbar bonita */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: rgba(0,0,0,0.05); }
::-webkit-scrollbar-thumb { background: rgba(22, 160, 133, 0.5); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: rgba(22, 160, 133, 0.8); }

/* --- ESTILOS DE MARKDOWN (TABELAS E LISTAS) --- */

/* Garante que o texto não "vaze" do balão */
.markdown-content {
    overflow-wrap: break-word;
    font-size: 0.95rem;
}

.markdown-content p {
    margin-bottom: 10px;
}

/* Títulos dentro do chat */
.markdown-content h1, 
.markdown-content h2, 
.markdown-content h3 {
    margin-top: 15px;
    margin-bottom: 8px;
    font-weight: 700;
    color: #16A085; /* Verde-Água da sua paleta */
}

/* Listas */
.markdown-content ul, 
.markdown-content ol {
    padding-left: 20px;
    margin-bottom: 10px;
}

/* Negrito */
.markdown-content strong {
    color: #2C3E50;
    font-weight: 700;
}

/* --- TABELAS PROFISSIONAIS --- */
.markdown-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
    font-size: 0.9rem;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    overflow: hidden; /* Arredonda as bordas da tabela */
}

.markdown-content th {
    background-color: #16A085; /* Cabeçalho Verde */
    color: white;
    text-align: left;
    padding: 10px;
    font-weight: bold;
}

.markdown-content td {
    padding: 8px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.markdown-content tr:last-child td {
    border-bottom: none;
}

/* Links */
.markdown-content a {
    color: #F39C12;
    text-decoration: underline;
}
```

================================================================================
📁 ARQUIVO: frontend/src/App.jsx
🛠️ EXTENSÃO: .jsx
📏 TAMANHO: 11.87 KB
🕒 ÚLTIMA MODIFICAÇÃO: 20/01/2026, 09:17:52
================================================================================

```jsx
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './App.css'

function App() {
  // --- TEMA "ENERGIA VITAL" (Refinado para Enterprise) ---
  const theme = {
    primary: '#16A085',     // Verde Principal
    secondary: '#F39C12',   // Laranja Ação
    bgGlobal: '#F4F7F6',    // Fundo Cinza Gelo Profissional
    sidebarBg: '#ffffff',   // Sidebar Branca Clean
    textMain: '#2C3E50',
    textLight: '#ffffff',
    borderColor: 'rgba(0,0,0,0.08)'
  }

  const [input, setInput] = useState('')
  // Mensagem inicial mais curta para dar espaço aos Cards
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Olá. O VaultMindOS está pronto. Selecione uma ferramenta ou envie um documento.' }
  ])
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const messagesEndRef = useRef(null)
  const fileInputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => { scrollToBottom() }, [messages])

  // --- LÓGICA DE UPLOAD E CHAT (Mantida idêntica) ---
  const handleFileChange = async (event) => {
    const file = event.target.files[0]
    if (!file) return
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)

    try {
      await axios.post('http://localhost:5000/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      setMessages(prev => [...prev, { 
        sender: 'system', 
        text: `📎 **DOCUMENTO ANEXADO:** "${file.name}"\n\nDados extraídos e prontos para análise.` 
      }])
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'ai', isError: true, text: 'Erro ao processar arquivo.' }])
    } finally {
      setUploading(false)
      event.target.value = ''
    }
  }

  const sendMessage = async (textOverride) => {
    const textToSend = textOverride || input
    if (!textToSend.trim()) return

    const userMsg = { sender: 'user', text: textToSend }
    const currentHistory = messages.filter(m => m.sender !== 'system')
    
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        message: textToSend,
        history: currentHistory
      })
      const aiMsg = { sender: 'ai', text: response.data.reply }
      setMessages(prev => [...prev, aiMsg])
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'ai', isError: true, text: 'O sistema está sobrecarregado (Cota API). Tente em breve.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage()
  }

  // --- COMPONENTES VISUAIS (Inspirados no Quantumrun) ---
  
  const SidebarItem = ({ icon, label, active }) => (
    <div style={{
      padding: '12px 20px',
      margin: '5px 10px',
      borderRadius: '8px',
      cursor: 'pointer',
      display: 'flex', alignItems: 'center', gap: '10px',
      color: active ? theme.primary : '#7F8C8D',
      background: active ? '#E8F6F3' : 'transparent',
      fontWeight: active ? '600' : '400',
      transition: 'all 0.2s'
    }}>
      <span style={{ fontSize: '1.1rem' }}>{icon}</span>
      <span>{label}</span>
    </div>
  )

  const ActionCard = ({ title, desc, icon }) => (
    <div 
      onClick={() => sendMessage(`Iniciar modo: ${title}`)}
      style={{
        background: 'white',
        padding: '20px',
        borderRadius: '12px',
        border: `1px solid ${theme.borderColor}`,
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        display: 'flex', flexDirection: 'column', gap: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.02)'
      }}
    >
      <div style={{ 
        width: '40px', height: '40px', borderRadius: '8px', 
        background: '#E8F6F3', color: theme.primary, 
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' 
      }}>
        {icon}
      </div>
      <div>
        <h3 style={{ margin: 0, fontSize: '0.95rem', color: theme.textMain }}>{title}</h3>
        <p style={{ margin: '5px 0 0 0', fontSize: '0.8rem', color: '#7F8C8D' }}>{desc}</p>
      </div>
    </div>
  )

  return (
    <div style={{ 
      width: '100vw', height: '100vh', 
      background: theme.bgGlobal, 
      color: theme.textMain,
      display: 'flex', 
      fontFamily: "'Segoe UI', 'Roboto', sans-serif"
    }}>
      
      {/* 1. SIDEBAR (Navegação Profissional) */}
      <div style={{
        width: '260px',
        background: theme.sidebarBg,
        borderRight: `1px solid ${theme.borderColor}`,
        display: 'flex', flexDirection: 'column',
        zIndex: 20
      }}>
        {/* Logo Area */}
        <div style={{ padding: '25px 20px', borderBottom: `1px solid ${theme.borderColor}` }}>
          <h1 style={{ margin: 0, fontSize: '1.2rem', color: theme.primary, letterSpacing: '-0.5px' }}>
            🌿 VaultMind<span style={{fontWeight:'300'}}>OS</span>
          </h1>
          <span style={{ fontSize: '0.7rem', color: '#95A5A6', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Enterprise Edition
          </span>
        </div>

        {/* Menu Items */}
        <div style={{ padding: '20px 0', flex: 1 }}>
          <SidebarItem icon="📊" label="Dashboard" active />
          <SidebarItem icon="📂" label="Meus Arquivos" />
          <SidebarItem icon="🧠" label="Memória Ativa" />
          <SidebarItem icon="⚙️" label="Configurações" />
        </div>

        {/* User Profile (Fake) */}
        <div style={{ padding: '20px', borderTop: `1px solid ${theme.borderColor}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: theme.secondary, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>J</div>
          <div style={{ fontSize: '0.85rem' }}>
            <div style={{ fontWeight: '600' }}>Joaquim</div>
            <div style={{ color: '#95A5A6', fontSize: '0.75rem' }}>Admin Pro</div>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT (Área de Trabalho) */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        
        {/* Header Simples */}
        <div style={{ 
          height: '60px', background: 'white', borderBottom: `1px solid ${theme.borderColor}`,
          display: 'flex', alignItems: 'center', padding: '0 30px', justifyContent: 'space-between'
        }}>
          <span style={{ fontWeight: '600', color: theme.textMain }}>Nova Análise de Documento</span>
          <span style={{ fontSize: '0.8rem', color: theme.primary, background: '#E8F6F3', padding: '5px 10px', borderRadius: '15px' }}>
             ● Sistema Online
          </span>
        </div>

        {/* Área de Scroll do Chat */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* CARDS DE AÇÃO (Estilo Quantumrun) - Só aparecem no inicio */}
          {messages.length < 3 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '20px' }}>
              <ActionCard icon="📄" title="Resumir Documento" desc="Extrair pontos chave de PDFs." />
              <ActionCard icon="🛡️" title="Auditoria de Risco" desc="Avaliar segurança do texto." />
              <ActionCard icon="💡" title="Ideação Estratégica" desc="Criar planos baseados em dados." />
            </div>
          )}

          {/* Mensagens */}
          {messages.map((msg, index) => (
            <div key={index} style={{
              alignSelf: msg.sender === 'user' ? 'flex-end' : (msg.sender === 'system' ? 'center' : 'flex-start'),
              maxWidth: msg.sender === 'system' ? '90%' : '80%',
              background: msg.sender === 'user' ? theme.primary : (msg.sender === 'system' ? '#E8F6F3' : 'white'),
              color: msg.sender === 'user' ? 'white' : theme.textMain,
              padding: '15px 25px',
              borderRadius: '12px',
              border: msg.sender === 'user' ? 'none' : `1px solid ${theme.borderColor}`,
              boxShadow: '0 2px 5px rgba(0,0,0,0.03)',
              borderLeft: msg.isError ? `4px solid ${theme.secondary}` : undefined
            }}>
              {msg.sender !== 'system' && (
                <div style={{ fontSize: '0.75rem', marginBottom: '5px', opacity: 0.7, fontWeight: 'bold' }}>
                  {msg.sender === 'user' ? 'VOCÊ' : 'VAULTMIND AI'}
                </div>
              )}
              <div className="markdown-content">
                {msg.sender === 'user' ? msg.text : <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>}
              </div>
            </div>
          ))}
          {loading && <div style={{ color: '#95A5A6', fontStyle: 'italic', paddingLeft: '10px' }}>Processando dados...</div>}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div style={{ padding: '20px 30px', background: 'white', borderTop: `1px solid ${theme.borderColor}`, display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button 
            onClick={() => fileInputRef.current.click()}
            disabled={uploading}
            style={{ 
              background: '#F4F6F7', border: 'none', width: '45px', height: '45px', 
              borderRadius: '8px', cursor: 'pointer', fontSize: '1.2rem', color: '#7F8C8D',
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.background = '#E5E8E8'}
            onMouseOut={e => e.currentTarget.style.background = '#F4F6F7'}
          >
            📎
          </button>
          
          <input 
            type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,.docx,.txt,.md" style={{ display: 'none' }} 
          />

          <input 
            value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={handleKeyPress}
            placeholder={uploading ? "Analisando arquivo..." : "Digite seu comando ou pergunte sobre o documento..."}
            disabled={uploading}
            style={{
              flex: 1, padding: '15px', borderRadius: '8px', background: '#F4F6F7',
              border: '1px solid transparent', outline: 'none', color: theme.textMain
            }}
            onFocus={e => { e.target.style.background = 'white'; e.target.style.borderColor = theme.primary }}
            onBlur={e => { e.target.style.background = '#F4F6F7'; e.target.style.borderColor = 'transparent' }}
          />
          
          <button 
            onClick={() => sendMessage()} disabled={uploading}
            style={{
              padding: '0 25px', height: '45px', borderRadius: '8px', background: theme.primary,
              color: 'white', fontWeight: '600', border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(22, 160, 133, 0.3)'
            }}
          >
            ENVIAR
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
```

================================================================================
📁 ARQUIVO: frontend/src/index.css
🛠️ EXTENSÃO: .css
📏 TAMANHO: 1.19 KB
🕒 ÚLTIMA MODIFICAÇÃO: 20/01/2026, 09:17:52
================================================================================

```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

```

================================================================================
📁 ARQUIVO: frontend/src/main.jsx
🛠️ EXTENSÃO: .jsx
📏 TAMANHO: 239 Bytes
🕒 ÚLTIMA MODIFICAÇÃO: 20/01/2026, 09:17:52
================================================================================

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

================================================================================
📁 ARQUIVO: frontend/vite.config.js
🛠️ EXTENSÃO: .js
📏 TAMANHO: 168 Bytes
🕒 ÚLTIMA MODIFICAÇÃO: 20/01/2026, 09:17:52
================================================================================

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

