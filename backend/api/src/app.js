import express from 'express';
import cors from 'cors';
import { listarProdutos } from './produtos.js';
import { verificarSaude } from './health.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', verificarSaude);
app.get('/produtos', listarProdutos);

export default app;
