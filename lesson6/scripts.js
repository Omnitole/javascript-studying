// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(`hello world`.length, 'lorem ipsum'.length, 'javascript is cool'.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(`hello world`.toUpperCase(), 'lorem ipsum'.toUpperCase(), 'javascript is cool'.toUpperCase())
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(`hello world`.toLowerCase(), 'lorem ipsum'.toLowerCase(), 'javascript is cool'.toLowerCase())
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string      '
console.log(str.trim())
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
let stringToArray = (str) => {
    let result = str.split(` `);
    console.log(result)
}
stringToArray('Ревуть воли як ясла повні')
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbersArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(numbersArray.map(value => value.toString()));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let sortNums = (array, direction) => {
    if (direction === `ascending`) {
        return array.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        return array.sort((a, b) => b - a)
    } else {
        return `Choose correct direction`
    }
}
let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration))
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5))
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let randomNumberGenerator = () => {
    return Math.round(Math.random() * 20)
}
let mappedCourses = coursesAndDurationArray.map(value => {
    value.id = randomNumberGenerator();
    return value
})
console.log(mappedCourses)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {value: 'joker'},
    {value: 'joker'}
]
// - знайти піковий туз
console.log(cards.find(card => card.cardSuit === 'spade' && card.value === 'ace'));
// - всі шістки
console.log(cards.filter(card => card.value === '6'));
// - всі червоні карти
console.log(cards.filter(card => card.color === 'red'))
// - всі буби
console.log(cards.filter(card => card.cardSuit === 'diamond'))
// - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'clubs' && card.value >= 9 || card.cardSuit === 'clubs' && card.value === 'jack' || card.cardSuit === 'clubs' && card.value === 'queen' || card.cardSuit === 'clubs' && card.value === 'king' || card.cardSuit === 'clubs' && card.value === 'ace'))

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log(cards.reduce(function (accumulator, card) {
    if (card.cardSuit === 'spade') {
        accumulator[0].push(card)
    } else if (card.cardSuit === 'diamond') {
        accumulator[1].push(card)
    } else if (card.cardSuit === 'heart') {
        accumulator[2].push(card)
    } else if (card.cardSuit === 'clubs') {
        accumulator[3].push(card)
    } else {
        console.log('Joker found')
    }
    return accumulator
}, [[], [], [], []]));


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter(value => value.modules.includes('sass')));
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter(value => value.modules.includes('docker')));
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (str,n) => {
    let array = [];
    while (str.length){
        array.push(str.substring(0,n));
        str = str.slice(n)
    }
    return array
}
console.log(cutString(`наслаждение`, 3));
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let deleteCharacters = (str,number) => {
    return str.substring(0,number)
}
document.writeln(deleteCharacters('Каждый охотник желает знать', 7))
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insertDash = (str) => {return str.toUpperCase().replaceAll(' ',`-`);}
console.log(insertDash("HTML JavaScript PHP"))

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let firstLetterAtString = (str) => {
    let bigLetta = str.charAt(0).toUpperCase()
    let otherPart = str.slice(1);
    return bigLetta.concat(otherPart)
}
console.log(firstLetterAtString('aboba'));
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'
let cleaner = (str) =>{return str.replaceAll(`---`,' ').replaceAll(`__`,' ').replaceAll(`..`,` `)}
console.log(cleaner(n1));
console.log(cleaner(n2));
console.log(cleaner(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomNumbersArray = (amount) =>{
    let array = [];
    for (let i = 0; i < amount; i++) {
        array.push(Math.round(Math.random()*100))
    }
    return array
}
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(randomNumbersArray(10).sort((a, b) => a - b));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
console.log(randomNumbersArray(10).filter(value => value !== 0).filter(value => value % 2 === 0));
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {
    let resultArray = [];
    let arrayOfWords = str.split(` `);
    for (const word of arrayOfWords) {
        let firstLetter = word.charAt(0).toUpperCase();
        let otherLetters = word.slice(1);
        resultArray.push(firstLetter.concat(otherLetters))
    }
    return resultArray.toString().replaceAll(`,`,' ')
}
console.log(capitalize(`aboba amogus abobus`));
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
let validator = (email) => {
    let index = email.indexOf('@');
    if(!email.includes('@') || index < 1 || email.indexOf(`.`) - index < 3){
        console.log('Invalid email')
    } else {
        console.log(`Your email si valid`)
    }

}
validator(`someeMAIL@i.ua`);
validator('someemail@gmail.com');
validator('someeMAIL@gmail.com');
validator(`some.email@gmail.com`)

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
let count = (str,letter) => {
    return str.split(letter).length-1
}
document.writeln(count("Астрономия это наука о небесных объектах", "о"))
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let cutString2 = (str,amount) => {
    let array = str.split(` `);
    while (array.length > amount){
        array.pop()
    }
    return array.toString().replaceAll(`,`,' ')
}

console.log(cutString2("Сила тяжести приложена к центру масс тела", 5));

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let booksArray = [
    {
        name: 'Game of thrones',
        authors: ['john', 'viktor'],
        genre: [1, 2],
        size: 1000
    },
    {
        name: 'Harry the Potter',
        authors: ['viktor'],
        genre: [1, 2, 3,4],
        size: 100000
    },
    {
        name: 'World of Warcraft',
        authors: [1, 2, 3],
        size: 400,
        genre: [1, 2, 3, 4]
    }
];

// -знайти наібльшу книжку.
let biggestSize = booksArray.sort((a, b) => b.size - a.size)[0].size;
console.log(booksArray.filter(value => value.size === biggestSize));

// - знайти книжку/ки з найбільшою кількістю жанрів
let biggestAmountOfGenres = booksArray.sort((a, b) => b.authors.length - a.authors.length)[0].genre.length
console.log(booksArray.filter(value => value.genre.length === biggestAmountOfGenres));

// - знайти книжку/ки з найдовшою назвою
let longestName = booksArray.sort((a, b) => b.name.length - a.name.length)[0].name.length
console.log(booksArray.filter(value => value.name.length === longestName));

// - знайти книжку/ки які писали 2 автори
console.log(booksArray.filter(value => value.authors.length === 2));

// - знайти книжку/ки які писав 1 автор
console.log(booksArray.filter(value => value.authors.length === 1));

// - вісортувати книжки по кількості сторінок по зростанню
console.log(booksArray.sort((a,b)=> a.size - b.size))