//Estas funciónes recogen el número

let receiveNumber1;
let receiveNumber2;

const askNumber1 = () => {
    let receiveNumber1 = Number(prompt("Introduce número"));
    return receiveNumber1;
};

const askNumber2 = () => {
    let receiveNumber2 = Number(prompt("Introduce número" ));
    return receiveNumber2;
};

numero1 = askNumber1();
numero2 = askNumber2();


//Errores y avisos
const letra = (Valor1, Valor2) => {
    if(isNaN(Valor1) || isNaN(Valor2)){
        return "Lo que ha introducido no es un número!";
    }  
}
noEsNumero = letra(numero1, numero2);
alert(noEsNumero);


//Estas funciónes realizan el cálculo

//Raiz cuadrada:
const raiz = (Valor1, Valor2) => {
    if(Valor1 === 0 || Valor2 === 0){
       resultadoRaiz = Math.sqrt(Valor1 + Valor2);
       return ("El resultado de la raiz es " + resultadoRaiz);
    }  
}
r = raiz(numero1, numero2);
alert(r);


//Suma:
const plus = (Valor1, Valor2) => {
    resultadoSuma = Valor1 + Valor2;
    return ('El resultado de la suma es ' + resultadoSuma); 
}    
suma = plus(numero1, numero2)
alert(suma);


//Resta:
const minus = (Valor1, Valor2) => {
    resultadoResta = Valor1 - Valor2;
    return ('El resultado de la resta es ' + resultadoResta); 
}    
resta = minus(numero1, numero2)
alert(resta);


//Division:

const divisionar = (Valor1, Valor2) => {
    resultadoDivision = Valor1 / Valor2;
    return ('El resultado de la división es ' + resultadoDivision); 
}    
divisionacion = divisionar(numero1, numero2);
alert(divisionacion);


//Multiplicación:

const multiply = (Valor1, Valor2) => {
    resultadoMulti = Valor1 * Valor2;
    return ('El resultado de la multiplicación es ' + resultadoMulti); 
}    
multiplicacion = multiply(numero1, numero2);
alert(multiplicacion);


//Resultados reunidos en un solo mensaje:

let array = [suma, resta, divisionacion, multiplicacion];
alert(array.join('\n'));


