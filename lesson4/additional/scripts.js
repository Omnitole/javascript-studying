// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let smallestOfThree = (a, b, c) => {
    if (a < b && a < c) {
        return a
    } else if (b < a && b < c) {
        return b
    } else if (c < a && c < b) {
        return c
    } else {
        return `Some numbers are equal`
    }
}
console.log(smallestOfThree(25, 8, 8))
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let biggestOfThree = (a, b, c) => {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else if (c > a && c > b) {
        return c
    } else {
        return `Some numbers are equal`
    }
}
console.log(biggestOfThree(25,4,1000))
// - створити функцію яка повертає найбільше число з масиву
let biggestInArray = (array) => {
    let biggestNumber = array[0]
    for (const number of array) {
        if(number > biggestNumber){
            biggestNumber = number
        }
    }
    return biggestNumber
}
console.log(biggestInArray([1, 241, 523, 33, 33, 33, 31, 211, 5, 5, 76, -10000, 112312313131]));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let averageAmount = (array) => {
    let sum = 0;
    for (const number of array) {
        sum+=number
    }
    return sum/array.length
}
console.log(averageAmount([25, 8, 8]))
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let minAndMax = function (...args) {
    let biggestOne = arguments[0];
    let smallestOne = arguments[0];
    for (const number of arguments) {
        if(number > biggestOne){
            biggestOne = number
        }
    }
    for (const number of arguments) {
        if(number < smallestOne){
            smallestOne = number
        }
    }
    document.write(biggestOne)
    return smallestOne
}
console.log(minAndMax(1, 241, 523, 33, 33, 33, 31, 211, 5, 5, 76, -10000, 112312313131));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let randomArray = (amount) => {
    let array = [];
    for (let i = 0; i < amount; i++) {
        array.push(Math.round(Math.random()*100))
    }
    return array
}
console.log(randomArray(10))
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomArray2 = (amount,limit) => {
    let array = [];
    for (let i = 0; i < amount; i++) {
        array.push(Math.round(Math.random()*limit))
    }
    return array
}
console.log(randomArray2(10,25))
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let reversedArray = (array) => {
    let newArray = [];
    for (let i = array.length-1, j = 0; i >= 0; i--,j++) {
        newArray[j] = array[i]
    }
    return newArray
}
console.log(reversedArray([1, 2, 3]));
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
let foo = function (...args) {
    if(arguments.length === 1){
        console.log(arguments[0])
    } else if (arguments.length === 2){
        console.log(arguments[0]+arguments[1])
    } else {
        console.log(`There are more than 2 arguments`)}
}
foo(1,`aboba`)
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
let sumArray = (array1,array2) => {
    let resultArray = [];
    for (let i = 0; i < array1.length; i++) {
        resultArray[i] = array1[i] + array2[i]
    }
    return resultArray
}
console.log(sumArray([1, 2, 3, 4], [2, 3, 4, 5]));
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let keys = (array) => {
    let resultArray = [];
    for (const object of array) {
        let keysArray = Object.keys(object)
        for (const key of keysArray) {
            resultArray.push(key)
        }
    }
    console.log(resultArray)
}
keys([{name: 'Dima', age: 13}, {model: 'Camry'}])
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let values = (array) => {
    let resultArray = [];
    for (const object of array) {
        let valuesArray = Object.values(object)
        for (const value of valuesArray) {
            resultArray.push(value)
        }
    }
    return resultArray
}
console.log(values([{name: 'Dima', age: 13}, {model: 'Camry'}]));