// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let newArray = [1,true,'aboba',false,'poroh',2,-100,'true',true,26];
console.log(newArray[0]);
console.log(newArray[1]);
console.log(newArray[2]);
console.log(newArray[3]);
console.log(newArray[4]);
console.log(newArray[5]);
console.log(newArray[5]);
console.log(newArray[6]);
console.log(newArray[7]);
console.log(newArray[8]);
console.log(newArray[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Harry the Potter',
    pageCount : 200,
    genre:'fantasy'
};
let book2 = {
    title: 'Lord of the rings',
    pageCount: 400,
    genre: 'fantasy'
};
let book3 = {
    title:'Murder in the eastern express',
    pageCount: 150,
    genre : 'detective'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'The last guardian',
    pageCount : 300,
    genre:'fantasy',
    authors : [{name:'Ben Chilwell',age:27},{name: 'Cristiano Ronaldo',age: 38}]
};
let book5 = {
    title: '5 seconds rule',
    pageCount: 300,
    genre: 'educational',
    authors:[{name:'Med Robbins',age:42}]
};
let book6 = {
    title:'Between Hitler and Stalin',
    pageCount: 650,
    genre : 'historical',
    authors: [{name:'Andriy Sikorskiy',age :90},{name:'Oleksandr Gogun',age:65},{name:`John Wick`,age: 37}]
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name:`Viktor`,username:`Viktorino`,password:123},
    {name:`Andriy`,username:`Andriyko229`,password:321},
    {name:`John`,username:`Johnchik228`,password:132},
    {name:`Kolya`,username:`Kolyanchik`,password:231},
    {name:`Katya`,username:`Katenka221`,password:324},
    {name:`Oleg`,username:`Vinnik`,password:5151},
    {name:`Iryna`,username:`Kvitochka`,password:15151515},
    {name:`Kyrylo`,username:`Bratstvo`,password:1523537},
    {name:`Kiy`,username:`Schek`,password:679000},
    {name:`Akakii`,username:`Palto`,password:3228},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[6].password);
console.log(users[5].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let b = -3;
if(b === 0){
    console.log('Вірно')
} else {
    console.log(`Невірно`)
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 60;
if(time >=0 && time <=15){
    console.log(`Перша четверть`)
} else if (time >15 && time <30 ){
    console.log('Друга четверть')
} else if (time >=30 && time <45){
    console.log('Третя четверть')
} else if (time >-45 && time <60){
    console.log('Четверта четверть')
} else {
    console.log('Введені дані не можуть бути хвилиною')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 30
if (day >0 && day <11){
    console.log('Перша декада')
} else if(day > 10 && day <21){
    console.log('Друга декада')
} else if(day >20 && day <=31){
    console.log('Третя декада')
} else {
    console.log('Не день місяця')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayCount = 10
switch (dayCount){
    case 1:
        console.log('Today is Monday, you need to go shopping');
        break;

    case 2:
        console.log('Today is Tuesday,you need to code');
        break;

    case 3:
        console.log(`Today is Wednesday, you need to go to the gym`);
        break;

    case 4:
        console.log(`Today is Thursday, you need to code`);
        break;

    case 5:
        console.log(`Today is Friday, you can go for a drink`);
        break;

    case 6:
        console.log(`Today is Saturday, you need to workout`);
        break;

    case 7:
        console.log(`Today is Sunday, you can relax`);
        break;

    default:
        console.log('You need to chose a number between 1 and 7');
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let number1 = 5;
let number2 = 2;
if(number1 === number2){
    console.log('They are equal')
} else if (number1 > number2){
    console.log(number1)
} else {
    console.log(number2)
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x = false;
let newX = x || `default`
console.log(newX)
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration>5){
    console.log(`Супер`)
}
if(coursesAndDurationArray[1].monthDuration>5){
    console.log(`Супер`)
}
if(coursesAndDurationArray[2].monthDuration>5){
    console.log(`Супер`)
}
if(coursesAndDurationArray[3].monthDuration>5){
    console.log(`Супер`)
}
if(coursesAndDurationArray[4].monthDuration>5){
    console.log(`Супер`)
}
if(coursesAndDurationArray[5].monthDuration>5){
    console.log(`Супер`)
}