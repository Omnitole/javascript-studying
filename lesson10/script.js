// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let f1 = document.forms.f1;
f1.onsubmit = function (e) {
    e.preventDefault()
    if(f1.name.value && f1.age.value && f1.surname.value){
        let div = document.createElement('div');
        div.style.border = "2px solid black";
        div.style.padding = "5px";
        div.innerText = f1.name.value + ' ' + f1.surname.value + ` ` + f1.age.value + ' years old';
        document.body.appendChild(div)
        f1.name.value = '';
        f1.age.value = '';
        f1.surname.value = ''
    }
}
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let div = document.getElementsByClassName('target')[0];
let valueFromStorage = JSON.parse(localStorage.getItem('target')) || div.innerText;
div.innerText = valueFromStorage;
let newValue = +div.innerText + 1
localStorage.setItem('target', JSON.stringify(newValue))
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
let data = {
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
}
let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
sessions.push(data);
localStorage.setItem('sessions', JSON.stringify(sessions))
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// при натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let array = [];
for (let i = 1; i <= 100; i++) {
    array.push(i)
}

let number = JSON.parse(localStorage.getItem('number')) || 0;

if (number >= 0 && number <= 90) {
    for (let i = number; i < number + 10; i++) {
        let number = document.createElement('p');
        number.innerText = array[i]
        document.body.appendChild(number)
    }
} else {
    document.write('You pressed to much in this direction')
}

let f2 = document.forms.form2;
let f3 = document.forms.form3;

f2.onsubmit = function () {
    let newNumber = +number + 10
    localStorage.setItem('number', JSON.stringify(newNumber))
}
f3.onsubmit = function () {
    let newNumber = +number - 10
    localStorage.setItem('number', JSON.stringify(newNumber))
}
//- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let text = document.getElementsByClassName('text')[0];

let button = document.getElementsByClassName('hide')[0];
button.onclick = function () {
    text.classList.toggle('hidden')
}
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let f4 = document.forms.f4;
f4.onsubmit = function (e) {
    e.preventDefault()
    if(f4.ageInput.value<18){
        console.log(`You are still young and happy`)
    } else {
        console.log(`Now you are not young and happy`)
    }
}
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let f5 = document.forms.f5;
f5.onsubmit = function (e) {
    e.preventDefault()
    for (let i = 0; i < f5.height.value; i++) {
        let block = document.createElement('div');
        block.style.display = "flex";
        block.style.flexWrap = "wrap"
        for (let j = 0; j < f5.length.value; j++) {
            let div = document.createElement('div');
            div.style.border = "2px solid black";
            div.style.padding = "2px";
            div.innerText = f5.content.value;
            div.style.margin = "5px"
            block.appendChild(div)
        }
        document.body.appendChild(block)
    }
}
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
let money = document.getElementById("aboba");
let newMoney = JSON.parse(localStorage.getItem('money')) || money.innerText;
money.innerText = newMoney
localStorage.setItem('money',JSON.stringify(newMoney))

let timeOfReload = new Date().getTime()/1000;
let lastTimeOfReload = JSON.parse(localStorage.getItem("time")) || timeOfReload
if(timeOfReload === lastTimeOfReload){
    localStorage.setItem('time',JSON.stringify(timeOfReload))

}
if (timeOfReload - lastTimeOfReload > 10){
    let newAmount = +newMoney.substring(0,3)+10;
    let amountForStorage = newAmount+"грн"
    money.innerText = amountForStorage;
    localStorage.setItem("money",JSON.stringify(amountForStorage));
    localStorage.setItem('time',JSON.stringify(timeOfReload))
} else {
    document.write('Be patient, w8 10 seconds before reloading!')
}






