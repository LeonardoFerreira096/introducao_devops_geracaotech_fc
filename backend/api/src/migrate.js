import pg from 'pg';

const { Client } = pg;

export async function migrate() {
  const client = new Client({
    connectionString: process.env.DIRECT_URL,
  });

  try {
    await client.connect();

    await client.query(`
      CREATE TABLE IF NOT EXISTS produtos (
        id SERIAL PRIMARY KEY,
        nome TEXT NOT NULL UNIQUE,
        preco NUMERIC(10, 2) NOT NULL
      );
    `);

    await client.query(`
      INSERT INTO produtos (nome, preco) VALUES
        ('Caderno', 19.90),
        ('Caneta', 4.50),
        ('Mochila', 89.90)
      ON CONFLICT (nome) DO NOTHING;
    `);

    console.log('Migração concluída com sucesso.');
  } finally {
    await client.end();
  }
}

migrate().catch((err) => {
  console.error('Erro na migração:', err);
  process.exit(1);
});
