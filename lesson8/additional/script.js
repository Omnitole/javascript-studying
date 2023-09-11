// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
function User(id,name,username,email,street,suite,city,zipcode,lat,lng,phone,website,companyName,catchphrase,bs){
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = {};
    this.address.street = street;
    this.address.suite = suite;
    this.address.city = city;
    this.address.zipcode = zipcode;
    this.address.geo = {};
    this.address.geo.lat = lat;
    this.address.geo.lng = lng;
    this.phone = phone;
    this.website = website;
    this.company = {};
    this.company.name = companyName;
    this.company.catchprase = catchphrase;
    this.company.bs = bs
}
let user = new User(1,'Leanne Graham','Bret','Sincere@april.biz','Kulas Light',`Apt. 556`,`Gwenborough`,`92998-3874`,`-37.3159`,`81.1496`,'1-770-736-8031 x56442','hildegard.org','Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets')
console.log(user)
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
class Tag {
    constructor(titleOfTag, action,titleOfAttr1,actionOfAttr1,titleOfAttr2,actionOfAttr2) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [];
        this.attrs[0] = {};
        this.attrs[0].titleOfAttr = titleOfAttr1;
        this.attrs[0].actionOfAttr = actionOfAttr1;
        this.attrs[1] = {};
        this.attrs[1].titleOfAttr = titleOfAttr2;
        this.attrs[1].actionOfAttr = actionOfAttr2;
    }
}
// інформацію брати з htmlbook.ru
console.log(`За htmlbook.ru - бан`)
//
// Таким чином описати теги
// -a
let aTag = new Tag('<a>',`Елемент <a> (від англ. anchor — якір) є одним з важливих в HTML і призначений для створення посилань. Для цього необхідно повідомити браузер, що є посиланням, а також вказати адресу документа, на який слід зробити посилання. Як атрибут href використовується адреса документа, на який відбувається перехід. Адреса посилання може бути абсолютним та відносним. Абсолютні адреси працюють скрізь і всюди, незалежно від імені сайту або веб-сторінки, де прописано посилання. Відносні посилання, як випливає з їхньої назви, побудовані щодо поточного документа або кореня сайту.`,
    'coords',`Встановлює координати актів ної області.`,`download`,`Пропонує завантажити вказаний за посиланням файл.`);
console.log(aTag)
// -div
let divTag = new Tag('<div></div>',`Елемент <div> (від англ. division — розділ, секція) є універсальним блоковим елементом і призначений для групування елементів документа з метою зміни виду вмісту через стилі. Для цього додається атрибут class або id з ім'ям класу або ідентифікатора.`,
    `align`,`Визначає вирівнювання вмісту <div>.`,`contenteditable`,`Повідомляє, що елемент доступний для редагування користувачем.`)
console.log(divTag)
// -h1
let h1Tag = new Tag('<h1>',`HTML пропонує шість заголовків різного рівня, які показують відносну важливість секції, розташованої після заголовка. Так, елемент <h1> (від англ. heading — заголовок) є найважливішим заголовком першого рівня, а <h6> служить для позначення заголовка шостого рівня і є найменшим. За замовчуванням, заголовок першого рівня відображається найбільшим шрифтом жирного зображення, заголовки наступного рівня за розміром менше. Елементи <h1>,...,<h6> відносяться до блокових елементів, вони завжди починаються з нового рядка, а потім інші елементи відображаються на наступному рядку. Крім того, перед заголовком та після нього додається порожній простір.`,
    `align`,`Визначає вирівнювання заголовка.`,`contextmenu`,`Встановлює контекстне меню для елемента.`)
console.log(h1Tag)
// -span
let spanTag = new Tag(`<span>`,`Універсальний рядковий елемент < span> (від англ. span — охоплювати) призначений для виділення окремих рядків, символів або інших малих елементів для подальшої зміни їх оформлення за допомогою стилів. Наприклад, всередині абзацу (<p>) можна змінити колір і розмір першого слова, якщо його виділити за допомогою елемента <span> ; і задати йому бажаний стиль.`,
    `accesskey`,`Дозволяє отримати доступ до елементу за допомогою заданого поєднання клавіш.`,`class`,`Визначає ім'я класу, яке дозволяє зв'язати тег зі стильовим оформленням.`)
console.log(spanTag)
// -input
let inputTag = new Tag(`<input>`,`Тег <input> є одним з різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем. Головним чином <input> призначений для створення текстових полів, різних кнопок, перемикачів і прапорців. Хоча елемент <input> не потрібно поміщати всередину контейнера <form> , що визначає форму, але якщо введені користувачем дані повинні бути відправлені на сервер, де їх обробляє серверна програма, то вказувати <form> обов'язково. Те ж саме відбувається і в разі обробки даних за допомогою клієнтських додатків, наприклад, скриптів на мові JavaScript. Основний атрибут тега <input> , що визначає вигляд елемента — type . Він дозволяє задавати такі елементи форми: текстове поле ( text ), поле з паролем ( password ), перемикач ( radio ), прапорець ( checkbox ), приховане поле ( hidden ), кнопка ( button ), кнопка для відправки форми ( submit ), кнопка для очищення форми ( reset ), поле для відправки файлу ( file ) і кнопка із зображенням ( image ). Для кожного елемента існує свій список атрибутів, які визначають його вигляд і характеристики. Крім того, в HTML5 додано ще більше десятка нових елементів.`,
    `accept `,`Встановлює фільтр на типи файлів, які ви можете відправити через поле завантаження файлів.`,`alt`,`Альтернативний текст для кнопки із зображенням.`)
console.log(inputTag)
// -form
let formTag = new Tag(`<form>`,`Елемент <form> (від англ. form — форма) встановлює форму на веб-сторінці. Форма призначена для обміну даними між користувачем та сервером. Область застосування форм не обмежена надсиланням даних на сервер, за допомогою клієнтських скриптів можна отримати доступ до будь-якого елементу форми, змінювати його та застосовувати на свій розсуд.`,
    `accept-charset`,`Встановлює кодування, в якому сервер може приймати та обробляти дані.`,`action`,`Адреса програми або документа, який обробляє дані форми.`)
console.log(formTag)
// -option
let optionTag = new Tag(`<option>`,`Елемент <option> (від англ. option — варіант, вибір) визначає окремі пункти списку, створюваного за допомогою контейнера <select>. Ширина списку визначається найширшим текстом, вказаним у <option>, а також може змінюватися за допомогою стилів. Якщо планується надсилати дані списку на сервер, потрібно помістити елемент <select> всередину форми. Це також необхідно, коли до даних списку йде звернення через скрипти.`,
    `disabled`,`Заблокувати для доступу елемент списку.`,`selected`,`Заздалегідь встановлює певний пункт списку виділеним.`)
console.log(optionTag)
// -select
let selectTag = new Tag(`<select>`,`<select> (від англ. selection — вибір) дозволяє створити елемент інтерфейсу у вигляді списку, що розкривається, а також список з одним або множинним вибором. Кінцевий вигляд залежить від використання атрибута size, який визначає висоту списку. Ширина списку визначається найширшим текстом, вказаним в елементі <option>, а також може змінюватися за допомогою стилів. Кожен пункт створюється за допомогою елемента <option>, який має бути вкладений у контейнер <select>. Якщо планується надсилати дані списку на сервер, потрібно помістити <select> всередину форми. Це також необхідно, коли до даних списку йде звернення через скрипти.`,
    `autofocus`,`Встановлює, що список отримує фокус після завантаження сторінки.`,`disabled`,`Блокує доступ та зміну елемент.`)
console.log(selectTag)
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
function Operation(type,credits,time){
    this.operationType = type;
    this.credits = credits
    this.operationTime = time
}

function UserCard(key){
    this.balance = 100;
    this.transactionLimit = 100;
    this.historyLogs = [];
    this.key = key;
    this.getCardOptions = function () {
        return {key:this.key,balance:this.balance,historyLogs:this.historyLogs,transactionLimit:this.transactionLimit}
    }
    this.putCredits = function (amount) {
        this.balance +=amount
        this.historyLogs.push(new Operation('Received credits',amount,new Date().toLocaleString()))
    }
    this.takeCredits = function (amount) {
        if(amount <= this.balance || amount<=this.transactionLimit){
            this.balance -=amount
            this.historyLogs.push(new Operation(`Withdrawal of credits`,amount,new Date().toLocaleString()))
        } else {
            console.error('Not enough money on balance or trying to exceed the limit')
        }
    }
    this.setTransactionLimit = function (newValue) {
        this.transactionLimit = newValue
        this.historyLogs.push(new Operation(`Transaction limit change`,newValue,new Date().toLocaleString()))
    }
    this.transferCredits = function (amount,reciever) {
        if(amount <= this.balance && amount <= this.transactionLimit){
            this.balance -= (amount+(amount/200))
            this.historyLogs.push(new Operation(`Withdrawal of credits`,amount+(amount/200),new Date().toLocaleString()))
            reciever.balance += amount
            reciever.historyLogs.push(new Operation('Received credits',amount,new Date().toLocaleString()))
        } else {
            console.error('Not enough money on balance')
        }
    }
}

function UserAccount(name,cards){
    this.name = name;
    this.cards = cards;
    this.addCard = function () {
        if(cards.length === 3){
            console.error(`You already have 3 cards,cannot add more`)
        } else {
        this.cards.push(new UserCard(cards.length+1))
            }
    }
    this.getCardByKey = function (key) {
        if(key <1 || key >3){
            console.error(`Choose a number between 1 and 3`)
        } else {
            return cards.find(value => value.key === key)
        }
    }
}

let user1 = new UserAccount(`Bob`,[]);
user1.addCard();
user1.addCard();

let card1 = user1.getCardByKey(1);
let card2 = user1.getCardByKey(2);
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300,card2);

card2.takeCredits(50);

console.log(card1.getCardOptions())

console.log(card2.getCardOptions())
