function soma(numero1, numero2) {
  if (typeof numero1 != "number") {
    return "Erro";
  } else {
    let resultado = numero1 + numero2;
    return resultado;
  }
}

exports.soma = soma;
