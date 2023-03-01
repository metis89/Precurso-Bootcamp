//Estas funciónes recogen el nuémero

let receiveNumber1;
let receiveNumber2;

const askNumber1 = () => {
    let receiveNumber1 = prompt('Introduce el primer número');
    return receiveNumber1;
};

const askNumber2 = () => {
    let receiveNumber2 = prompt('Introduce el segundo número')
    return receiveNumber2;
};

numero1 = askNumber1();
numero2 = askNumber2();

console.log(numero1);
console.log(numero2);


//Estas funciónes realizan el cálculo
const sum = (valueA, valueB) => valueA + valueB 
    const sumTwoNumbers = sum(numero1, numero2);
    return alert(sumTwoNumbers);


const substract = (valueA, valueB) => valueA - valueB 
    const subTwoNumbers = substract(numero1, numero2);
    return alert(subTwoNumbers);

const division = (valueA, valueB) => valueA / valueB 
    const divTwoNumbers = division(numero1, numero2)
    return alert(divTwoNumbers);


const multiplication = (valueA, valueB) => valueA * valueB 
    const multiTwoNumbers = multiplication(numero1, numero2);
    return alert(divTwoNumbers);





