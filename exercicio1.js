const input = require("input");

async function exercicio() {
  const numero = await input.text('Digite um numero?', { default: '0' });
 
  console.log('Voce digitou o numero ' + numero);
}
 
exercicio();