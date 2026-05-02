import express from 'express';
import axios from 'axios';

const router = express.Router();

const CORE_URL = 'http://127.0.0.1:4000/api';

// Proxy: /core/health
router.get('/health', async (req, res) => {
    try {
        const url = CORE_URL + '/health';
        console.log('[CORE PROXY] Chamando URL:', url);
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.log('----- ERRO /core/health -----');
        console.log('error.code:', error.code);
        console.log('error.message:', error.message);
        res.status(500).json({
            error: 'Erro ao acessar CORE /health',
            details: error.message || 'sem mensagem'
        });
    }
});

// Proxy: /core/system
router.get('/system', async (req, res) => {
    try {
        const url = CORE_URL + '/system';
        console.log('[CORE PROXY] Chamando URL:', url);
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.log('----- ERRO /core/system -----');
        console.log('error.code:', error.code);
        console.log('error.message:', error.message);
        res.status(500).json({
            error: 'Erro ao acessar CORE /system',
            details: error.message || 'sem mensagem'
        });
    }
});

export default router;
