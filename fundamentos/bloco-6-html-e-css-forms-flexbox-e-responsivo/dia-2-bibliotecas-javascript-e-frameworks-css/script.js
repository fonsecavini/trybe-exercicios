function multiples_of_3_or_5(roof) {
    // Write your code here
    let primos = 0;
    for (let index = 2; index < roof.length; index += 1) {
        roof % index === 0;
        primos = roof[index];

        roof = 10;
        console.log(primos);

    }}

    function count_down(x) {
        // Write your code here
   
        for (let index = 1; index < 10; index ++) {
            console.log (10 - index);
        }
    } count_down(10)