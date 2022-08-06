// Number() - para converter valores em numeros;
// Prompt() - para registrar entradas de usuarios;
// Alert() - para mostrar uma mensgagem ao usuario;
// Template Strings - para usar strings junto com expressoes;


calculadora = () =>{
    const operacao = prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3- Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Pontenciação (**)' );
    
    let n1 = prompt('Insira o primeiro valor: ');
    let n2 = prompt('Insira o segundo valor: ');
    let resultado;

    soma = () =>{
        resultado = n1+ n2;
        alert(`${n1}`)
    }

    
    if (operacao == 1) {
        soma();
    } else if (operacao == 2) {
        subtração();
    } else if (operacao == 3) {
        multipliacao();
    } else if (operacao == 4) {
        divisaoReal();
    } else if (operacao == 5) {
        divisaoInteira();
    } else if (operacao == 6) {
        pontenciacao();
    }
}


calculadora()