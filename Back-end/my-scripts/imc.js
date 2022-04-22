const readline = require('readline-sync');

const imc = (peso, altura) => {
    const div = (altura*altura);
    const IMC = peso/div;

    console.log(IMC);

    if(IMC < 18.5) return 'Abaixo do peso (magreza)'
    if(IMC >= 18.5 && IMC <= 24.9) return 'Peso normal'
    if(IMC >= 25) return 'Acima do peso (sobrepeso)'
}

const askPeso = () => {
    return readline.question('Qual é o seu peso?\nR:  ')
};

const askAltura = () => {
    return readline.question('Qual é a sua altura?\nR:  ')
};

const peso = askPeso();
const altura = askAltura();

console.log(`Você está ${imc(peso, altura)}`);
console.log('Hello word!');
