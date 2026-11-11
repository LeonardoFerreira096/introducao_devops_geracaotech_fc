const API_URL = 'http://localhost:3001/produtos';

async function buscarProdutos() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Falha na resposta da API');
  }

  return response.json();
}

async function renderizarProdutos() {
  const lista = document.getElementById('lista-produtos');
  const mensagemErro = document.getElementById('mensagem-erro');

  try {
    const produtos = await buscarProdutos();

    produtos.forEach((produto) => {
      const item = document.createElement('li');
      item.textContent = `${produto.nome}: ${produto.preco}`;
      lista.appendChild(item);
    });
  } catch {
    mensagemErro.textContent = 'Não foi possível carregar os produtos.';
    mensagemErro.hidden = false;
  }
}

renderizarProdutos();
