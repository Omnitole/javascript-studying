// - Сворити масив не цензцрних слів.
let badWords = ['бля','dick','nigger','monkey'];
//   Сворити інпут текстового типу.
//   Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//   кинути алерт з попередженням.
//   Перевірку робити при натисканні на кнопку
let f1 = document.forms.f1;
f1.onsubmit = function (e) {
    e.preventDefault()
    for (const badWord of badWords) {
        if(f1.curse.value === badWord){
            alert('BAD WORD,YOU SHOULD BE ASHAMED OF YOURSELF')
        }
    }
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
let f2= document.forms.f2;
f2.onsubmit = function (e) {
    e.preventDefault()
    for (const badWord of badWords) {
        if(f2.curse.value.includes(badWord)){
            alert('BAD WORD,YOU SHOULD BE ASHAMED OF YOURSELF')
        }
    }
}
// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementsByClassName('menu')[0];
let options = document.getElementsByClassName('menuPositions')[0];
menu.onclick = function () {
    options.classList.toggle(`hidden`)
}
// - Создать список комментариев, пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
]
for (const comment of comments) {
    let block = document.createElement('div');
    let header = document.createElement('h2');
    header.innerText = comment.title;
    header.classList.add('cool')
    let body = document.createElement('p');
    body.innerText = comment.body;
    let button = document.createElement('button');
    button.innerText = 'Hide/show body of a comment';
    button.onclick = function () {
        body.classList.toggle('hidden');
    }
    block.append(header,body,button);
    document.body.appendChild(block)
}
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let hideHerself = document.createElement('button');
hideHerself.innerText = 'I am shy,do not touch me'
hideHerself.onclick = function () {
    hideHerself.classList.add(`hidden`)
}
document.body.appendChild(hideHerself)
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// window.onclick = function (e) {
//     console.log(e.target.localName,e.target.attributes.id.value,e.target.classList,e.target.clientWidth,e.target.clientHeight)
//     let div = document.createElement('div');
//     let title = document.createElement('h2');
//     title.innerText = `Tag name - ${e.target.localName}`;
//     let info = document.createElement('p');
//     let classList = "";
//     for (const klas of e.target.classList) {
//         classList = classList+" "+klas
//     }
//     info.innerText = `Id - ${e.target.attributes.id.value}, class(es) - ${classList}, width - ${e.target.clientWidth}px, height - ${e.target.clientHeight}px`
//     div.append(title,info);
//     document.body.appendChild(div)
// }
// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let f3 = document.forms.f3;
f3.onsubmit = function (e) {
    e.preventDefault();
    let users = [];
    if(f3.ageFilter.checked && !f3.cityFilter.checked && !f3.booleanFilter.checked){
        users = usersWithAddress.filter(value => value.age >= 29);
    } else if(f3.ageFilter.checked && f3.cityFilter.checked && !f3.booleanFilter.checked){
        users = usersWithAddress.filter(value => value.age >= 29).filter(value => value.address.city === 'Kyiv')
    } else if(f3.ageFilter.checked && f3.cityFilter.checked && f3.booleanFilter.checked){
        users = usersWithAddress.filter(value => value.age >= 29).filter(value => value.address.city === 'Kyiv').filter(value => value.status === false)
    } else if(!f3.ageFilter.checked && f3.cityFilter.checked && !f3.booleanFilter.checked){
        users = usersWithAddress.filter(value => value.address.city === 'Kyiv')
    } else if(!f3.ageFilter.checked && f3.cityFilter.checked && f3.booleanFilter.checked){
        users = usersWithAddress.filter(value => value.address.city === 'Kyiv').filter(value => value.status === false)
    } else if(!f3.ageFilter.checked && !f3.cityFilter.checked && f3.booleanFilter.checked){
        users = usersWithAddress.filter(value => value.status === false)
    } else {}
    for (const user of users.filter(value => value.age >= 29)) {
        let div = document.createElement('div');
        let header = document.createElement('h2');
        header.innerText = `Id - ${user.id}, ${user.name}, ${user.age} years old`
        let body = document.createElement('p');
        body.innerText = `${user.name} status is ${user.status}, user lives in ${user.address.city} on ${user.address.street} street in the house number ${user.address.number}`;
        div.append(header,body);
        document.body.appendChild(div)
    }
}
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let arrayOfImages = ["Auto.png"]
let img = document.createElement('img')
img.src = arrayOfImages[0];
document.body.appendChild(img)


//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан