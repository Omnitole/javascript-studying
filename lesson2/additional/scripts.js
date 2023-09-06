// - Нам дано масив друзів ; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]
if(friends.length >=3){
    console.log(`Big array`)
} else {
    console.log(`Small array`)
}
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
// Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
let number1 = 2000;
let number2 = 1500;
let number3 = 2000;

if(number3>number2 && number3<number1 || number3<number2 && number3>number1){
    console.log(number3)
} else if(number2>number3 && number2<number1 || number2>number1 && number2<number3){
    console.log(number2)
} else if(number1>number2 && number1<number3 || number1>number3 && number1<number2){
    console.log(number1)
} else {
    console.log(`Some numbers are equal`)}

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
let a = 2;
let b = 1;
let result = a+b<4 ? 'Мало' : 'Багато'
console.log(result)
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
let numba = -1000000000000000000000000000000;

let numbaType = numba < 0 ? `Negative` : numba === 0 ? `Zero` : 'Positive';
console.log(numbaType)

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = true;
if(test){
    console.log(`Correct`)
} else {
    console.log(`Incorrect`)}
let testResult = test === true ? `Correct` : `Incorrect`;
console.log(testResult)
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let jsCorrectName = prompt(`Wright an official name of Javascript`);
if (jsCorrectName === 'ECMAScript'){
    console.log(`Correct`)}
        else {
            console.log(`Incorrect`)

}
//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let apartmentNumber = +prompt(`Wright your apartment number`);
if(apartmentNumber >0 && apartmentNumber <=20){
    console.log(`First`)
} else if(apartmentNumber>20 && apartmentNumber <=48){
    console.log(`Second`)
} else if(apartmentNumber>48 && apartmentNumber <=90){
    console.log(`Third`)
} else {
    console.log(`Input is incorrect`)
}
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let number4 = 10;
if (number4 === 10){
    console.log(`Correct`)
} else {
    console.log(`Correct`)}
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temperature = 25;
if(temperature >=10 && temperature <=22){
    console.log(`Going to study`)
} else {
    console.log(`Studying from home`)}
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
let number = 6;
switch (number) {
    case 1:
        console.log(`You won a pizza coupon`);
        break
    case 2:
        console.log(`You won a car`);
        break
    case 3:
        console.log(`You won an orange`)
        break
    case 4:
        console.log(`You won an Iphone`)
        break
    case 5:
        console.log(`You won a trip for two to the Bali islands`)
        break
    default:
        console.log(`Your number is incorrect`)
}