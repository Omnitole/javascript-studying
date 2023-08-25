// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let numbers = [1,5,8,1000,-1000];
for (const number of numbers) {
    console.log(number)
}
let strings = ['aboba','amogus','among us','bullets','taunt']
for (const string of strings) {
    console.log(string)
}
let mixed = [-124154141,true,'aboba',false,22];
for (const mixedElement of mixed) {
    console.log(mixedElement)
}
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptyArray = [];
emptyArray[0] = `kyrylo`;
emptyArray[1] = 122;
emptyArray[2] = false;
emptyArray[3] = 'pizza';
emptyArray[4] = true;
for (const emptyArrayElement of emptyArray) {
    console.log(emptyArrayElement)
}
let array =  [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
let i = 0;
while(i<array.length){
    console.log(array[i])
    i++
}
// 2. перебрати його циклом for
for (const number of array) {
    console.log(number)
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let j = 0;
while(j<array.length){
    if(j%2!==0){
        console.log(array[j])
    }
    j++
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for(let i=0;i<array.length;i++){
    if(i%2 !== 0){
        console.log(array[i])
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let s = 0;
while(s<array.length){
    if(s%2===0){
        console.log(array[s])
    }
    s++
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for(let i=0;i<array.length;i++){
    if(i%2 === 0){
        console.log(array[i])
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for(let i=0;i<array.length;i++){
    if(i%3 === 0 && i !==0){
        array[i] = 'okten';
        console.log(array[i])
    }
}

// 8. вивести масив в зворотньому порядку.
for(let i = array.length-1;i>=0;i--){
    console.log(array[i])
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1. перебрати його циклом while
let k = array.length-1;
while (k>=0){
    console.log(array[k])
    k--
}

//     2. перебрати його циклом for
for(let i = array.length-1;i>=0;i--){
    console.log(array[i])
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let m = array.length-1;
while (m>=0){
    if(m%2!==0){
        console.log(array[m])
    }
    m--
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for(let i = array.length-1;i>=0;i--){
    if(i%2 !== 0){
        console.log(array[i])
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let f = array.length-1;
while (f>=0){
    if(f%2===0){
        console.log(array[f])
    }
    f--
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for(let i = array.length-1;i>=0;i--){
    if(i%2 === 0){
        console.log(array[i])
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for(let i = array.length-1;i>=0;i--){
    if(i%3 === 0 && i !==0){
        array[i] = 'okten';
    }
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbersArray = [15135,135135,135135,135135,135135,1351353634657357,356735863568,35683568,3568546835,685468];
for (const number of numbersArray) {
    console.log(number)
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let stringsArray = ['pizza',`sushi`,`yoshi`,`aboba`,'amogus',`pepsi`,`kola`,'queen',`of`,`tanzpola`];
for (const string of stringsArray) {
    console.log(string)
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let randomTypesArray = [1,true,3,false,`mcDonalds`,-2134,true,`popai`,`sailor`,26];
for (const randomTypesArrayElement of randomTypesArray) {
    console.log(randomTypesArrayElement)
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (const randomTypesArrayElement of randomTypesArray) {
    if(typeof randomTypesArrayElement === "boolean"){
        console.log(randomTypesArrayElement)
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const randomTypesArrayElement of randomTypesArray) {
    if(typeof randomTypesArrayElement === "number"){
        console.log(randomTypesArrayElement)
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const randomTypesArrayElement of randomTypesArray) {
    if(typeof randomTypesArrayElement === "string"){
        console.log(randomTypesArrayElement)
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let emptyArray2 = [];
emptyArray2[0] = true;
emptyArray2[1] = 2;
emptyArray2[2] = `pizza`;
emptyArray2[3] = false;
emptyArray2[4] = 'mikey';
emptyArray2[5] = 1451254151515;
emptyArray2[6] = false;
emptyArray2[7] = 'amogus';
emptyArray2[8] = `abobus`;
emptyArray2[9] = 'aboba';
for (const emptyArray2Element of emptyArray2) {
    console.log(emptyArray2Element)
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let i = 1;i<=10;i++){
    document.write(`Current step is ${i}`);
    console.log(i)
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let i = 1;i<=100;i++){
    document.write(`Current step is ${i}`);
    console.log(i)
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for(let i = 1;i<=200;i+=2){
    document.write(`Current step is ${i}`);
    console.log(i)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for(let i = 1;i<=100;i++){
    if(i%2===0){
    document.write(`Current step is ${i}`);
    console.log(i)
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for(let i = 1;i<=100;i++){
    if(i%2!==0){
        document.write(`Current step is ${i}`);
        console.log(i)
    }
}
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title:'Between Hitler and Stalin',
        pageCount: 250,
        genre : 'historical',
        authors: [{name:'Andriy Sikorskiy',age :90},{name:'Oleksandr Gogun',age:65},{name:`John Wick`,age: 37}]
    },
    {
        title: '5 seconds rule',
        pageCount: 300,
        genre: 'educational',
        authors:[{name:'Med Robbins',age:42}]
    },
    {
        title: 'The last guardian',
        pageCount: 300,
        genre: 'fantasy',
        authors: [{name: 'Ben Chilwell', age: 27}, {name: 'Cristiano Ronaldo', age: 38}]
    }
];
let biggestBook = books[1].pageCount
for (let i = 0;i<books.length;i++) {
    if(books[i].pageCount > biggestBook){
        biggestBook = books[i].pageCount
    }
}
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор