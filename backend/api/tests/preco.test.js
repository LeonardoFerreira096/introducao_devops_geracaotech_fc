import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { formatarPreco } from '../src/preco.js';

describe('formatarPreco', () => {
  it('deve formatar 19.9 como "R$ 19,90"', () => {
    assert.equal(formatarPreco(19.9), 'R$ 19,90');
  });

  it('deve formatar 4.5 como "R$ 4,50"', () => {
    assert.equal(formatarPreco(4.5), 'R$ 4,50');
  });
});
