const soma = require('./soma');

test('1 + 1 = 2', () => {
    expect(soma(1, 1)).toBe(2);
});