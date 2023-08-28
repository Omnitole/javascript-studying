// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a,b) {
    return a*b
}
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function roundArea(r) {
    return 3.14*r
}
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cilinderArea(h,r) {
    return 2*3.14*r*(h+r)
}
// - створити функцію яка приймає масив та виводить кожен його елемент
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
function arrayLog(array) {
    for (const item of array) {
        console.log(item.name)
    }
}
arrayLog(usersWithId)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textCreation(text) {
    document.write(`<p>${text}</p>`)
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCreation(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}
ulCreation('aboba')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulCreationWithAmount(text,amount) {
    document.write(`<ul>`);
    for(let i=0;i<amount;i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
ulCreationWithAmount('abobus',3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listCreation(array) {
    document.write(`<ol>`);
    for (const element of array) {
        document.write(`<li>${element}</li>`)
    }
    document.write(`</ol>`)
}
listCreation(['aboba',true,222,false,'pizzaHut',-1010101010])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function blockCreation(array) {
    for (const user of array) {
        document.write(`<div>`);
        document.write(`<h2>${user.name}</h2>`);
        document.write(`<div>Id - ${user.id}, age - ${user.age}</div>`)
        document.write(`</div>`)
    }
}
blockCreation(usersWithId)
// - створити функцію яка повертає найменьше число з масиву
function lowestNumber(array) {
    let lowest = array[0];
    for (const number of array) {
        if(number < lowest){
            lowest = number
        }
    }
    return lowest
}

console.log(lowestNumber([1, 1241354134, 23, -10000, 22, 2]));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let result = 0;
    for (const number of arr) {
        result += number
    }
    return result
}

console.log(sum([1,2,10]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
function swap(arr,index1,index2) {
    let firstNumber = arr[index1];
    let secondNumber = arr[index2];
    arr[index2] = firstNumber;
    arr[index1] = secondNumber;
    return arr
}
console.log(swap([11, 22, 33, 44], 0, 1));
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency){
            return sumUAH/currencyValue.value
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250