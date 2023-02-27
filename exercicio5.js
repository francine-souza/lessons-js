const input = require("input");

async function calculoImc() {
  const massaStr = await input.text('Massa (KG) :', { default: '0' });
  const alturaStr = await input.text('Altura (M) :', { default: '0' });

  const massa = parseInt(massaStr);
  const altura = parseInt(alturaStr);

  let Imc = massa / (altura ^ 2);
  console.log("IMC: " + Imc );
  if( Imc >= 18.5 && Imc < 25){
    console.log("Parabéns! Você esta no peso ideal");
  }else{
    console.log("você não esta na faixa de peso ideal");
  }
}


calculoImc();