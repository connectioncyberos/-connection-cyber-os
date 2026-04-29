import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.get('/api/system', (req, res) => res.json({ version: '1.0.0' }));
app.post('/api/logs', (req, res) => res.json({ received: true }));

app.listen(4000, () => console.log('CORE rodando na porta 4000'));
