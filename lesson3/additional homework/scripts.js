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
        genre : ['historical',`educational`],
        authors: [{name:'Andriy Sikorskiy',age :90},{name:'Oleksandr Gogun',age:65},{name:`John Wick`,age: 37}]
    },
    {
        title: '5 seconds rule',
        pageCount: 300,
        genre: ['educational'],
        authors:[{name:'Med Robbins',age:42}]
    },
    {
        title: 'The last guardian',
        pageCount: 300,
        genre: ['fantasy'],
        authors: [{name: 'Ben Chilwell', age: 27}, {name: 'Cristiano Ronaldo', age: 38}]
    }
];
let biggestBook = books[0];
console.log(biggestBook.pageCount)
for(const book of books){
    if(book.pageCount > biggestBook.pageCount){
        biggestBook = book
    }
}
console.log(biggestBook.title)
// - знайти книжку/ки з найбільшою кількістю жанрів
let biggestGenreAmount = books[0];
for(const book of books){
    if(book.genre.length > biggestGenreAmount.genre.length){
        biggestGenreAmount = book
    }
}
console.log(biggestGenreAmount.title)

// - знайти книжку/ки з найдовшою назвою
let longestBook = books[0];
for(const book of books){
    if(book.title.length > longestBook.title.length){
        longestBook = book
    }
}
console.log(longestBook.title)

// - знайти книжку/ки які писали 2 автори
for (const book of books){
    if(book.authors.length === 2){
        console.log(book.title)
    }
}

// - знайти книжку/ки які писав 1 автор
for (const book of books){
    if(book.authors.length ===1){
        console.log(book.title)
    }
}
let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];
/*За допомогою циклу вивести всю інформацію про користувачів використовуючи шаблон Template 1.1
			* за допомоги стилів, побудувати сітку по 2 об'єкта в лінію
			*
			* */
<!--template 1.1-->
// <div class="users-box">
//     <div class="user-block">
//         <h2>ID - NAME - USERNAME </h2>
//         <h3>EMAIL - PHONE</h3>
//         <div class="address-block">
//             <p>City - ADDRESS.CITY</p>
//             <p>Street - ADDRESS.STREET</p>
//             <p>Suite - ADDRESS.SUITE</p>
//             <p>Zip code - ADDRESS.ZIPCODE</p>
//         </div>
//
//     </div>
document.write(`<div class="users-box">`);
for (const user of usersList) {
    document.write(`<div class="user-block">`);
    document.write(`<h2>Id - ${user.id}, name - ${user.name}, username - ${user.username}</h2>`);
    document.write(`<h3>Email - ${user.email}, phone number - ${user.phone}</h3>`);
    document.write(`<div class="address-block">`);
    document.write(`<p>City - ${user.address.city}</p>`);
    document.write(`<p>Street - ${user.address.street}</p>`);
    document.write(`<p>Suite - ${user.address.suite}</p>`);
    document.write(`<p>Zip code - ${user.address.zipcode}</p>`);
    document.write(`</div>`);
    document.write(`</div>`)
}
