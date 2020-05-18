//Cria um programa que calcule a media
// das notas entre os alunos e envia
// mensagem do cálculo da média.


const nome = 'Marcelo'
const nota1 = 9.9

const nome1 = 'Manuela'
const nota2 = 1.0

const nome2 = 'Fulano'
const nota3 = 1.0
// se a média for maior que 5, parabens a turma

const media = (nota1 + nota2 + nota3 ) / 3

if (media >= 7){
console.log(`A nota foi maior que ${media}. Parabens Turma`)
}
else{
console.log(`A média foi ${media}, você foi reprovado`)
}

