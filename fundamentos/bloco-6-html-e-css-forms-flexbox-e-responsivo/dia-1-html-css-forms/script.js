
let contagem = [];
let number = 0;

    for (let index = 0; index <= 10; index += 1) {
     number = 10 - [index];
     contagem = number;
      
        console.log (contagem);    
    }

    function multiples_of_3_or_5(roof) {
        // Write your code here
        let primos = [];
        let numPrimos = 0;
        let soma = 0;
        
        for (let index = 2; index < 10; index += 1) {
            numPrimos = (index % 2 === 0);
            primos = numPrimos;        

            console.log (primos);
        }
        for (let index = 0; index < primos.length; index += 1) {
            soma += primos[index];
            
            return soma;        
        }
        
    }