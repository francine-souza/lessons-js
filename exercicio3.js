const input = require("input");

async function calculoMedia() {
  const nota1Texto = await input.text('Digite a primeira nota', { default: '0' });
  const nota2Texto = await input.text('Digite a primeira nota', { default: '0' });

  const nota1= parseInt(nota1Texto);
  const nota2= parseInt(nota2Texto);

  let media = (nota1 + nota2)/2;
  console.log("A media do aluno foi " + media);

  if(media >=7){
    console.log("aluno aprovado");
  }else{
    if(media >= 5 && media < 7){
      console.log("aluno em recuperação");
    }else{
      console.log("aluno reprovado");
    }

  }

}
calculoMedia();