import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import app from '../src/app.js';
import pool from '../src/db.js';
import { migrate } from '../src/migrate.js';

describe('GET /produtos (Integração)', () => {
  let server;
  let baseUrl;

  before(async () => {
    await migrate();
    await new Promise((resolve) => {
      server = app.listen(0, () => {
        const { port } = server.address();
        baseUrl = `http://localhost:${port}`;
        resolve();
      });
    });
  });

  after(async () => {
    await new Promise((resolve) => server.close(resolve));
    await pool.end();
  });

  it('deve retornar status 200 e os 3 produtos iniciais com preço formatado', async () => {
    const response = await fetch(`${baseUrl}/produtos`);
    assert.equal(response.status, 200);

    const body = await response.json();
    assert.equal(body.length, 3);

    assert.deepEqual(body[0], { id: 1, nome: 'Caderno', preco: 'R$ 19,90' });
    assert.deepEqual(body[1], { id: 2, nome: 'Caneta', preco: 'R$ 4,50' });
    assert.deepEqual(body[2], { id: 3, nome: 'Mochila', preco: 'R$ 89,90' });
  });
});
