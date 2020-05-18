/* =================================================

     OPERADORES DE COMPARAÇÃO

     >      Maior
     <      Menor
     >=     Maior igual a
     <=     Menor igual a
     ==     Igual a 
     ===    Igual e do mesmo tipo
     !=     Diferente,inclusive do tipo

====================================================*/

//desafio 01
// Verifica se a pessoa e maior de 18 anos
//const idade = 17
//se sim, deixar entra,se nao,bloquear a entrada
//if (idade >= 18){
//console.log(' Pode Entra')
//}
//else{
//console.log('Bloqueado')
//}
// se a pessoa tiver 17 anos
// avisa pra volta quando fiser 18
//if(idade ===17){
  //  console.log(`voce tem ${idade}, quando fizer 18 volte`)
//}
/*==================================================

    OPERADORES DE LÓGICOS

    && "E" As duas condiçoes devem ser verdadeiras
    para que a condição final seja verdadeira.
    "OU" Uma da condições deve ser verdadeira
     para que a condição final seja verdadeira.
     "NÃO" Naga uma condição

===========================================*/

//dar bonifiçao de 500 reais
// se o vendedor possuir 100 ou menos pontos
// mas deve possuir mais de 50 pontos]

/*===========================================
    OPERADORES DE ARITMÉTICOS

    * MULTIPLICAÇÃO
    / DIVISÃO
    % RESTO DA DIVISÃO
    - SUBTRAÇÃO
=============================================*/


//Cálculo de IMC

const nome = 'Carlos';
const peso = 200;
const altura = 1.88;

const imc = ( peso / (altura * altura));

if( imc > 30){
    console.log('voce está acima do peso')
}
else{
    console.log('voce esta no peso ideal')
}

