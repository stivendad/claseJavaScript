const obtenerMenor = (numeros) => {
    let menor = Infinity;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i]<=menor) {
            menor = numeros[i];
        }
    }
    // console.log(menor);
    return menor;
}

let arr = [5,7,2,4,5,6,1]

let menor = obtenerMenor(arr);
console.log(menor);


const sumarNumeros = (numeros) => {
    let final = "";
    for (let i = 0; i < numeros.length; i++) {
        final = parseInt(final + numeros[i]);
    }

    return final;
}

let arr2 = [1,2,3,4,5];
let final = sumarNumeros(arr2);

console.log(final);

// Ejercicio 3

const contieneIndice = (numero, numeros) => {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === numero) {
            return true
        }
    }
    return false
}

console.log(contieneIndice(5, [1,4,5,2,3,6]));
console.log(contieneIndice(10, [1,4,5,2,3,6]));

// Ejercicio 4

const separar = (arr) => {
    const arrEmoji = arr.sort();
    return arrEmoji;
}

console.log(separar(["🍑","🍆","🍆","🍆","🍑","🍆","🍑"]));

// Ejercicio 5

const estarJuntos = (personajes) => {
    const frodo = personajes.indexOf("Frodo") === -1 ? Infinity : personajes.indexOf("Frodo");
    // if (personajes.indexOf("Frodo") === -1) {
    //     frodo = Infinity
    // }else {
    //     frodo = personajes.indexOf("Frodo")
    // }

    const sam = personajes.indexOf("Sam") === -1 ? Infinity : personajes.indexOf("Sam");
    return sam - frodo === -1 || sam - frodo === 1;
}

console.log(estarJuntos(['Sam', 'Frodo', 'Legolas']));
console.log(estarJuntos(['Aragon', 'Frodo', 'Sam']));
console.log(estarJuntos(['Sam', 'Orco', 'Legolas']));


console.log(['Sam', 'Orco', 'Legolas'].indexOf('Casa'))

// Ejercicio 6

const obtenerIndice = (valor, array) => {
    return array.indexOf(valor);
}

console.log(obtenerIndice(7, [3,4,5,6,7,10]));
console.log(obtenerIndice(15, [3,4,5,6,7,10]));

// Ejercicio 6
const repetir = (valor, cantidad) => {
    let arr = [];
    for (let i = 0; i < cantidad; i++) {
        arr.push(valor);
    }
    return arr;
}

console.log(repetir(3, 2));