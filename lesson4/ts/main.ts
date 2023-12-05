// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let counter = (a:number,b:number):number => a+b

console.log(counter(1, 22));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент

let iterator = (array:number[]):void => {
    for (const number of array) {
        console.log(number)
    }
}
iterator([1,55,2])
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragrapher = (text:string):void => {
    document.write(`<p>${text}</p>`)
}
paragrapher('aboba')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let list = (amount:number,text:string):void=>{
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${text}</li>`)
    }
}
list(3,'amogus')
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

interface IUser {
    id:number,
    name:string,
    age:number
}

let usersIterator = (users:IUser[]):void => {
    for (const user of users) {
        console.log(user)
    }
}
usersIterator([{id:1,age:2,name:'viktor'},{id:2,age:20,name:'aafadad'}])
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (array:number[]):number => {
    let sum = 0;
    for (const number of array) {
        sum+=number
    }
    return sum
}
console.log(sum([22, 1, 22]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250