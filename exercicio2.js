const input = require("input");

async function numeroPar() {
  const numero = await input.text('Digite um numero?', { default: '0' });

  if (numero % 2 == 0) {
    console.log('O numero ' + numero + " é par");
  } else {
    console.log("o numero " + numero + " é impar");
  }
}

numeroPar();