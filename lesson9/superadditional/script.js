let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let newArrayForAddresses = [];
for (const user of users) {
    newArrayForAddresses.push({
        city:user.address.city,
        country: user.address.country,
        street: user.address.street,
        houseNumber: user.address.houseNumber
    })
}
console.log(newArrayForAddresses)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
for (const user of users) {
    let block = document.createElement('div');
    block.innerText = `Name - ${user.name}, age - ${user.age}, status - ${user.status}, city - ${user.address.city}, country - ${user.address.country},street - ${user.address.street}, house number - ${user.address.houseNumber}`
    document.body.appendChild(block)
}
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
for (const user of users) {
    let block = document.createElement('div');
    let name = document.createElement('p');
    name.innerText = `Name - ${user.name}`;
    let age = document.createElement('p');
    age.innerText = `Age - ${user.age}`;
    let status = document.createElement('p');
    status.innerText = `Status - ${user.status}`;
    let address = document.createElement('p');
    address.innerText = `city - ${user.address.city}, country - ${user.address.country},street - ${user.address.street}, house number - ${user.address.houseNumber}`
    block.append(name,age,status,address)
    document.body.appendChild(block)
}
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (const user of users) {
    let block = document.createElement('div');
    let name = document.createElement('p');
    name.innerText = `Name - ${user.name}`;
    let age = document.createElement('p');
    age.innerText = `Age - ${user.age}`;
    let status = document.createElement('p');
    let city = document.createElement('p');
    status.innerText = `Status - ${user.status}`;
    let address = document.createElement('div');
    city.innerText = `city - ${user.address.city}`;
    let country = document.createElement('p');
    country.innerText = `country - ${user.address.country}`;
    let street = document.createElement('p');
    street.innerText = `street - ${user.address.street}`;
    let houseNumber = document.createElement('p');
    houseNumber.innerText = `house number - ${user.address.houseNumber}`
    address.append(city,country,street,houseNumber)
    block.append(name,age,status,address)
    document.body.appendChild(block)
}

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
let h2List = document.getElementsByTagName('h2');
let id = document.getElementById('content');
let ul = document.createElement('ul');
for (const head of h2List) {
   let li = document.createElement('li');
   li.innerText = head.innerText
    ul.appendChild(li)
}
id.appendChild(ul);

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
];
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
let wrap = document.createElement('div');
wrap.setAttribute(`id`,"wrap");
for (let i = 1; i <= rules.length; i++) {
   let block = document.createElement('div');
   block.classList.add(`rules`, `rule${i}`)
   let header = document.createElement('h2');
   header.innerText = rules[i-1].title;
   let text = document.createElement('p');
   text.innerText = rules[i-1].body;
   block.append(header,text);
   wrap.appendChild(block)
}
document.body.appendChild(wrap)
