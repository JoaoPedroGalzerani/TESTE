const isValidEmail = require('./validador');
describe('validação de email', ()=> {
    test('retorna true para o email valido', ()=> {
        expect(isValidEmail('user@example.com')).toBe(true)});
});

test('retorna true para o email valido', ()=> {
    expect(isValidEmail('user@example.com')).toBe(true)});

test('retorna não sei o que', ()=> {
        expect(isValidEmail('user@')).toBe(false)});

test('retorna string vazia', ()=> {
            expect(isValidEmail('')).toBe(false)});
