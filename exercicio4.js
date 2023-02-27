const input = require("input");

async function conversorMoeda() {
  const realStr = await input.text('Quantos reais eu tenho?', { default: '0' });
  const dolarStr = await input.text('Qual valor do dólar?', { default: '0' });

  const reais= parseInt(realStr);
  const dolares= parseInt(dolarStr);

  let valorDolar = reais / dolares
  console.log("Tenho " + valorDolar + " dólares");
}
conversorMoeda();