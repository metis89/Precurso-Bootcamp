
//Primero definimos las funciones a usar en el programa

//Estas funciónes recogen el número
const askElements = () => {
    let numeroElementos = Number(prompt("¿Con cuantos números quieres operar?"));
    while(isNaN(numeroElementos)){
        numeroElementos = prompt("Por favor introduce en número la cantidad de elementos con la que quieres operar");
    }
    return numeroElementos;
}
const operandos = new Array();



//Estas funciónes realizan el cálculo

//Suma:

let sumacion = 0;
const suma = () => {
    for(let i=0; i<cifrasOperar; i++){
        if (i===0){
            sumacion = operandos[0];
            }else{
            sumacion = sumacion + operandos [i];
    }
}
    return 'El resultado de la suma es ' + sumacion;
}




//Resta:

let restacion = 0;
const resta = () => {
    for(let i=0; i<cifrasOperar; i++){
        if (i===0){
        restacion = operandos[0];
        }else{
        restacion = restacion - operandos [i];
        }
    }
    return 'El resultado de la resta es ' + restacion;
}



//División:

let division = 0;
const divide = () => {
    for(let i=0; i<cifrasOperar; i++){
        if (i===0){
            division = operandos[0];
            }else{
            division = division / operandos [i];
        }
    }
    return 'El resultado de la división es ' + division;
}




//Multiplicación:

let multiplicacion = 0;
const multiplica = () => {
    for(let i=0; i<cifrasOperar; i++){
        if (i===0){
            multiplicacion = operandos[0];
            }else{
            multiplicacion = multiplicacion * operandos [i];
            }
    }
    return 'El resultado de la multiplicación es ' + multiplicacion;
    
}




//Ahora invocaremos a las funciones ya definidas anteriormente para ejecutar el programa al completo

let nuevoCalculo = 'Si';

while (nuevoCalculo == 'Si'){

cifrasOperar = askElements();

for(let i=0; i<cifrasOperar; i++){
    operandos[i] = Number(prompt("Introduce el operador de la posición " + i));
}
let totalsuma = suma();
let totalresta = resta();
let totaldivision = divide();
let totalmultiplicacion = multiplica();

//Resultados reunidos en un solo mensaje:

let array = [totalsuma, totalresta, totaldivision, totalmultiplicacion];
alert(array.join('\n'));

nuevoCalculo = prompt('¿Quieres volver a hacer "calculaciones", jojojojo? Contesta Si/No')


} 


