// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
var first = 'hello';
var second = 'owu';
var third = 'com';
var fourth = 'ua';
var fifth = 1;
var sixth = 10;
var seventh = -999;
var eighth = 123;
var ninth = 3.14;
var tenth = 2.7;
var eleventh = 16;
var twelfth = true;
var thirteenth = false;
console.log(first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelfth, thirteenth);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
var firstName = 'Anatolii';
var middleName = 'John';
var lastName = 'Kyryienko';
var fullName = firstName + middleName + lastName;
console.log(fullName);
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true
var a = 100;
var b = '100';
var c = true;
console.log(typeof a, typeof b, typeof c);
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
var namePrompt = prompt('Name');
var surnamePrompt = prompt('Surname');
var agePrompt = +prompt('Your age');
console.log(namePrompt + ' ' + surnamePrompt + ' ' + agePrompt + ' years old');
