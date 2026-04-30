import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.get('/api/system', (req, res) => {
    res.json({ version: '1.0.0' });
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log("CORE rodando na porta " + PORT);
});
