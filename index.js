/* EXERCÍCIO 1 DE INTERPRETAÇÃO
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

RESPOSTA = Ele pede um número e verifica se ele é par ou ímpar, se for
par aparece que passou no teste, se for ímpar aparece que não passou */



/* EXERCÍCIO 2 DE INTERPRETAÇÃO
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

RESPOSTA = a) O código vai pedir uma fruta, e após isso vai aparecer
no console o nome e o preço da fruta escolhida. b) e c) não sei. */



/* EXERCÍCIO 3 DE INTERPRETAÇÃO
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

RESPOSTA = A primeira linha pede para o usuário digitar um
número e guarda ele numa const. Se o número for 10 ele passa 
no teste e aparece a mensagem dos dois consoles.log, se for
menor que 0 não aparece nada. Por estar dentro do escopo
se o if der false, a segunda mensagem não acontecerá e não
irá aparecer no ultimo console.log que está no escopo global. */





/* EXERCÍCIO 1 DE ESCRITA DE CÓDIGO
const Idade = Number(prompt("Qual tua idade?"))

if (Idade >= 18) {
    console.log("Tu pode dirigir meu nobre")
} 
else {
    console.log("Tu não pode dirigir não meu querido")
} */



/* EXERCÍCIO 2 DE ESCRITA DE CÓDIGO
const turno = prompt("Qual turno tu estuda? M, V ou N?")
if (turno == ("M")) {
    console.log("BOM DIA")
}
if (turno == ("V")) {
    console.log("Boa Tarde")
}
if (turno == ("N")) {
    console.log("Boa noite")
} */



/* EXERCÍCIO 3 DE ESCRITA DE CÓDIGO
const turno = prompt("Qual turno tu estuda? M, V ou N?")
let msg
switch (turno) {
  case "M":
    msg = "Bom Dia"
    break;
  case "V":
    msg = "Boa Tarde"
    break;
  case "N":
    msg = "Boa Noite"
    break;
}
console.log(`${preco}`) */



/* EXERCÍCIO 4 DE ESCRITA DE CÓDIGO
const preço = Number(prompt("Qual o valor do ingresso?"))
const genero = prompt("Qual o gênero do filme?")
if (Number(preço) <= 15) {
  console.log("Sim")
}
else {
  console.log("Não")
}

if (genero === ("Fantasia")) {
  console.log("Sim")
}
else {
  console.log("Não")
} */





/* DESAFIO 1
const preço = Number(prompt("Qual o valor do ingresso?"))
const genero = prompt("Qual o gênero do filme?")
const lanche = prompt("O que tu vai comer?")
if (Number(preço) <= 15) {
  console.log("Sim")
}
else {
  console.log("Não")
}

if (genero === ("Fantasia")) {
  console.log("Sim")
}
else {
  console.log("Não")
}
console.log(`Aproveita teu ${lanche}`) */



