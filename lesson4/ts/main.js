// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
var counter = function (a, b) { return a + b; };
console.log(counter(1, 22));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
var iterator = function (array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var number = array_1[_i];
        console.log(number);
    }
};
iterator([1, 55, 2]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
var paragrapher = function (text) {
    document.write("<p>".concat(text, "</p>"));
};
paragrapher('aboba');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
var list = function (amount, text) {
    for (var i = 0; i < amount; i++) {
        document.write("<li>".concat(text, "</li>"));
    }
};
list(3, 'amogus');
var usersIterator = function (users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        console.log(user);
    }
};
usersIterator([{ id: 1, age: 2, name: 'viktor' }, { id: 2, age: 20, name: 'aafadad' }]);
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
var sum = function (array) {
    var sum = 0;
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var number = array_2[_i];
        sum += number;
    }
    return sum;
};
console.log(sum([22, 1, 22]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
