import pool from './db.js';
import { formatarPreco } from './preco.js';

export async function listarProdutos(req, res) {
  try {
    const { rows } = await pool.query('SELECT id, nome, preco FROM produtos ORDER BY id ASC;');

    const produtos = rows.map((item) => ({
      id: item.id,
      nome: item.nome,
      preco: formatarPreco(item.preco),
    }));

    return res.status(200).json(produtos);
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    return res.status(500).json({ erro: 'Erro interno no servidor' });
  }
}
