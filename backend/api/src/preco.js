export function formatarPreco(valor) {
  const numero = Number(valor);
  return numero
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    .replace('\u00A0', ' ');
}
