function triangulo(a, b, c){
    var lado1 = a
    var lado2 = b
    var lado3 = c
    if(lado1 <(lado2 + lado3) && lado2 <(lado1 + lado3) && lado3 < (lado1 + lado2)){
        if(lado1 == lado2 && lado2 == lado3){
            console.log("Três lados iguais é um Equilátero");
            
        }else if (lado1 == lado2 || lado1 == lado3 || lado3 == lado2){
            console.log("Dois lados iguais é um Isósceles:");

        }else{
            console.log("Todos os lados diferentes é um Escaleno");
        }
    }
}