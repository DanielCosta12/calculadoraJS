// // Number() - para converter valores em numeros;
// // Prompt() - para registrar entradas de usuarios;
// // Alert() - para mostrar uma mensgagem ao usuario;
// // Template Strings - para usar strings junto com expressoes;

// calculadora = () => {
//   const operacao = Number(
//     prompt(
//       "Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Pontenciação (**)"
//     )
//   );
//   if (!operacao || operacao >= 7) {
//     alert("ERRO - Operação inválida, por favor colocar um número válido");
//     calculadora();
//   } else {
//     let n1 = Number(prompt("Insira o primeiro valor: "));
//     let n2 = Number(prompt("Insira o segundo valor: "));
//     let resultado;

//     if (!n1 || !n2) {
//       alert("ERRO - Parâmetros inválidos!");
//       calculadora();
//     } else {
//       soma = () => {
//         resultado = n1 + n2;
//         alert(`${n1} + ${n2} = ${resultado}`);
//         novaOperacao();
//       };

//       subtracao = () => {
//         resultado = n1 - n2;
//         alert(`${n1} - ${n2} = ${resultado}`);
//         novaOperacao();
//       };
//       multiplicacao = () => {
//         resultado = n1 * n2;
//         alert(`${n1} * ${n2} = ${resultado}`);
//         novaOperacao();
//       };

//       divisaoReal = () => {
//         resultado = n1 / n2;
//         alert(`${n1} / ${n2} = ${resultado}`);
//         novaOperacao();
//       };

//       divisaoInteira = () => {
//         resultado = n1 % n2;
//         alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
//         novaOperacao();
//       };
//       pontenciacao = () => {
//         resultado = n1 ** n2;
//         alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
//         novaOperacao();
//       };

//       novaOperacao = () => {
//         let opcao = prompt("Deseja fazer outra operação?\n 1 - Sim \n 2 - Não");

//         if (opcao == 1) {
//           calculadora();
//         } else if (opcao == 2) {
//           alert("Até mais tarde, Obrigado!");
//         } else {
//           alert("Digite uma opção válida!");
//           novaOperacao();
//         }
//       };
//     }

//     // if (operacao == 1) {
//     //     soma();
//     // } else if (operacao == 2) {
//     //     subtracao();
//     // } else if (operacao == 3) {
//     //     multiplicacao();
//     // } else if (operacao == 4) {
//     //     divisaoReal();
//     // } else if (operacao == 5) {
//     //     divisaoInteira();
//     // } else if (operacao == 6) {
//     //     pontenciacao();
//     // }

//     switch (operacao) {
//       case 1:
//         soma();
//         break;
//       case 2:
//         subtracao();
//         break;
//       case 3:
//         multiplicacao();
//         break;
//       case 4:
//         divisaoReal();
//         break;
//       case 5:
//         divisaoInteira();
//         break;
//       case 6:
//         pontenciacao();
//         break;
//     }
//   }
// };

// calculadora();
const soma = document.querySelector("#soma");
const subtracao = document.querySelector("#subtracao");
const multiplicacao = document.querySelector("#multiplicacao");
const divisaoReal = document.querySelector("#divisao-real");
const divisaoInteira = document.querySelector("#diviao-inteira");
const pontenciacao = document.querySelector("#potenciacao");
function som() {
  console.log("olar");
}
function sub() {
  console.log("olar");
}
function som() {
  console.log("olar");
}
function som() {
  console.log("olar");
}
function som() {
  console.log("olar");
}
function som() {
  console.log("olar");
}

soma.addEventListener("click", () => som());

subtracao.addEventListener("click", () => sub());

multiplicacao.addEventListener("click", () => mult());

divisaoReal.addEventListener("click", () => divisao);

divisaoInteira.addEventListener("click", divInteira);

potenciacao.addEventListener("click", pont);
