/* function testingScope(escopo) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';

    if (escopo === true) {
        ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
        console.log(ifScope);
    } else {
        console.log(elseScope);
    }
}

testingScope(true); */

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(`Os números ${array.sort(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

 */
const nfatorial = n => {
    let number = 1; 

    for (let i = n; i >= 1; i--){
        number *= [i];
    }
   return number;
}

nfatorial(10);
