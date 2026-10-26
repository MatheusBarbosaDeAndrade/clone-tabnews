const calculadora = require("../models/calculadora.js");

test("a soma tem que dar 10", () => {
  let soma = calculadora.soma(5, 5);
  expect(soma).toBe(10);
});

test("O teste precisar dar erro", () => {
  let input = calculadora.soma("banada", 10);
  expect(input).toBe("Erro");
});
