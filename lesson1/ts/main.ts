// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let first:string = 'hello';
let second:string = 'owu';
let third:string = 'com';
let fourth:string = 'ua';
let fifth:number = 1;
let sixth:number = 10;
let seventh:number = -999;
let eighth:number = 123;
let ninth:number = 3.14;
let tenth:number = 2.7;
let eleventh:number = 16;
let twelfth:boolean = true;
let thirteenth:boolean = false
console.log(first,second,third,fourth,fifth,sixth,seventh,eighth,ninth,tenth,eleventh,twelfth,thirteenth)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName:string = 'Anatolii';
let middleName:string = 'John';
let lastName:string = 'Kyryienko';

let fullName : string = firstName+middleName+lastName;

console.log(fullName)
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true

let a:number = 100;

let b:string = '100';

let c:boolean = true

console.log(typeof a, typeof b, typeof c)
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let namePrompt:string = prompt('Name');

let surnamePrompt:string = prompt('Surname');

let agePrompt:number = +prompt('Your age');

console.log(namePrompt + ' ' + surnamePrompt + ' ' + agePrompt + ' years old')