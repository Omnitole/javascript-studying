//
// Всі функції повинні бути описані стрілочним типом!!!!
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
// - створити функцію яка повертає найменьше число з масиву
let smallestInArray = (array) => {
    let smallestNumber = array[0]
    for (const number of array) {
        if(number < smallestNumber){
            smallestNumber = number
        }
    }
    return smallestNumber
}
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumOfArray = (array) => {
    let sum = 0;
    for (const number of array) {
        sum+=number
    }
    return sum
}
// - Дано натуральное число n. Выведите все числа от 1 до n.
let allNumbers = (n) => {
    for (let i = 1; i < n; i++) {
        console.log(i)
    }
}
allNumbers(10)
console.log(`Next task`)
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let allNumbersUpgraded = (a,b) => {
    if(a<b) {
        for (let i = a; i < b; i++) {
            console.log(i)
        }
    } else if(a>b){
        for (let i = b; i < a; i++) {
            console.log(i)
        }
    } else {
        console.log(`Hz sho napisati numbers are equal or whatsoever`)}
}
allNumbersUpgraded(20,10)
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let foo = (array,a) => {
    let number1 = array[a];
    let number2 = array[a+1];
    array[a+1] = number1;
    array[a] = number2
    return array
}
console.log(foo([9, 8, 0, 4], 0));
console.log(foo([9, 8, 0, 4], 1));
console.log(foo([9, 8, 0, 4], 2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
let hateZeroes = (array) => {
    let nonZeroesArray = [];
    let zeroesArray = [];
    for (const number of array) {
        if(number === 0){
            zeroesArray.push(number);
        } else {
            nonZeroesArray.push(number)
        }
    }
    for (let i = 0; i < zeroesArray.length; i++) {
        nonZeroesArray.push(0)
    }
    return nonZeroesArray
}
console.log(hateZeroes([1, 0, 6, 0, 3]));
console.log(hateZeroes([0, 1, 2, 3, 4]));
console.log(hateZeroes([0, 0, 1, 0]));

// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]