// Crie um programa para calcular a aposentadoria de uma pessoa.
// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;


const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const tempodeContribuicaoMinimaHomem = 35
const tempodeContribuicaoMinimaMulher = 30
const calculodaAposentadoria = idade + contribuicao
const verifiacAposentadoriaHomem = sexo == 'H' &&  calculodaAposentadoria >= 95 && contribuicao >= tempodeContribuicaoMinimaHomem
const verifiacAposentadoriaMulher = sexo == 'F' &&  calculodaAposentadoria >= 85 && contribuicao >= tempodeContribuicaoMinimaMulher

if(verifiacAposentadoriaHomem || verifiacAposentadoriaMulher){
    Console.log ('silva voce pode se aposenta')
}else{
    Console.log('silva nao voce pode se aposenta')
}



