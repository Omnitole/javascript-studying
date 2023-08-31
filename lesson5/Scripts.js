// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectangleSquared = (a,b) => a*b
console.log(rectangleSquared(2,4))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const roundSquared = (r) => r*3.14
console.log(roundSquared(3))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cilinderSquared = (r,h) => 2*3.14*r*(h+r)
// - створити функцію яка приймає масив та виводить кожен його елемент
const loggingArray = (array) =>{
    for (const item of array) {
        console.log(item)
    }
}
let testArray = [1,true,'abasadsgagabv']
loggingArray(testArray)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const textCreation = (text) => {
  document.write(`<p>${text}</p>`)
}
textCreation('agafaqgag')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const ulCreation = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}
ulCreation('Tolyan228322')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const ulCreation2 = (text,amount) => {
    document.write(`<ul>`);
    for(let i=0;i<amount;i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
ulCreation2('FRANCIA, ST, MBAAAAPEEEEEE',5)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const listCreation = (array) => {
    document.write(`<ul>`);
    for (const element of array) {
        document.write(`<li>${element}</li>`)
    }
    document.write(`</ul>`)
}
listCreation(testArray)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const objectCreation = (array) => {
    for (const user of array) {
        document.write(`<div>`);
        document.write(`<h2>${user.name}</h2>`);
        document.write(`<div>Id - ${user.id}, age - ${user.age}</div>`)
        document.write(`</div>`)
    }
}
// - створити функцію яка повертає найменьше число з масиву
const smallestOne = (array) => {
    let smallest = array[0];
    for (const number of array) {
        if(number < smallest){
            smallest = number
        }
    }
    return smallest
}
console.log(smallestOne([1, 1000, -5]));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arr) => {
  let result = 0;
    for (const number of arr) {
        result+=number
    }
    return result
}
console.log(sum([1,151515,151351,135234535765347,45745746,7457457,457457457,547]))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (array,index1,index2) => {
    let firstNumber = array[index1];
    let secondNumber = array[index2];
    array[index2] = firstNumber;
    array[index1] = secondNumber;
  return array
}
console.log(swap([11, 22, 33, 44], 0, 1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency){
            return sumUAH/currencyValue.value
        }
    }
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));