//     - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
let r = 'hello';
let w = 'owu';
let s = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let i = 3.14;
let j = 2.7;
let k = 16;
let l = true;
let m = false
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Anatolii';
let middleName = 'Anatolievich';
let lastName = 'Kyryienko';
let persson = firstName + ' ' + middleName + ' ' + lastName
console.log(persson)
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100; let b = '100'; let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let userName = prompt('Your name');
let fatherName = prompt('Po bat`kovi');
let age = +prompt('Your age');
let message = 'Name is ' + userName + ` ` + fatherName + `, he is ` + age + ' years old.'
document.write(message)