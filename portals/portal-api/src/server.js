import express from 'express';
import cors from 'cors';
import coreRoutes from './routes/core.js';

const app = express();
app.use(cors());
app.use(express.json());

// Rota base para teste
app.get('/', (req, res) => {
    res.json({ status: 'portal-api ativo', port: 3001 });
});

// Rotas do CORE
app.use('/core', coreRoutes);

// Porta padrão do portal-api
const PORT = 3001;

app.listen(PORT, () => {
    console.log('portal-api rodando na porta ' + PORT);
});
