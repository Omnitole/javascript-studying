// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let usersArray = [];
usersArray[0] = new User(123123,'John','Johnchenko','john@gmail.com','033-23123-1231-123');
usersArray[1] = new User(1241235125,'Igor','Igorenko','Igorenko@gmai.com','1231-123123-1231-31');
usersArray[2] = new User(8123123,'John','Johnchenko','john@gmail.com','033-23123-1231-123');
usersArray[3] = new User(712,'Igor','Igorenko','Igorenko@gmai.com','1231-123123-1231-31');
usersArray[4] = new User(622,'John','Johnchenko','john@gmail.com','033-23123-1231-123');
usersArray[5] = new User(55414124,'Igor','Igorenko','Igorenko@gmai.com','1231-123123-1231-31');
usersArray[6] = new User(412313123,'John','Johnchenko','john@gmail.com','033-23123-1231-123');
usersArray[7] = new User(312451515125,'Igor','Igorenko','Igorenko@gmai.com','1231-123123-1231-31');
usersArray[8] = new User(211222,'John','Johnchenko','john@gmail.com','033-23123-1231-123');
usersArray[9] = new User(123,'Igor','Igorenko','Igorenko@gmai.com','1231-123123-1231-31');
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = usersArray.filter(value => value.id % 2 === 0)
console.log(filteredUsers);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(usersArray.sort((a, b) => a.id - b.id));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clientsArray = [];
clientsArray.push(new Client(1,'Kokos','Kokosenko','Koks228@gmail.com','131231231241241',['Sushi','Pizza','Aclohol','Cigarettes','milk','bread']));
clientsArray.push(new Client(2,'asfasfasf','afasfasf','fafasfasfasfa','afafafafafafa',[`susgfa`,`afafafaf`,`aefafafaf`]))
clientsArray.push(new Client(3,'Kokos','Kokosenko','Koks228@gmail.com','131231231241241',['Sushi','Pizza','Aclohol','Cigarettes','milk']));
clientsArray.push(new Client(4,'asfasfasf','afasfasf','fafasfasfasfa','afafafafafafa',[`susgfa`,`afafafaf`]))
clientsArray.push(new Client(5,'Kokos','Kokosenko','Koks228@gmail.com','131231231241241',['Sushi','Pizza','Aclohol','Cigarettes']));
clientsArray.push(new Client(6,'asfasfasf','afasfasf','fafasfasfasfa','afafafafafafa',[`susgfa`]))
clientsArray.push(new Client(7,'Kokos','Kokosenko','Koks228@gmail.com','131231231241241',['Sushi','Pizza','Aclohol']));
clientsArray.push(new Client(8,'asfasfasf','afasfasf','fafasfasfasfa','afafafafafafa',[`susgfa`,`afafafaf`,`aefafafaf`]))
clientsArray.push(new Client(9,'Kokos','Kokosenko','Koks228@gmail.com','131231231241241',['Sushi','Pizza']));
clientsArray.push(new Client(10,'asfasfasf','afasfasf','fafasfasfasfa','afafafafafafa',[`susgfa`,`afafafaf`,`aefafafaf`,`afafafaf3awfdas`]))
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clientsArray.sort((a, b) => a.order.length - b.order.length));
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model,maker,year,speed,v){
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.speed = speed;
    this.v = v;

    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }
    this.info = function(){
        console.log(`Модель - ${this.model}`);
        console.log(`Виробник - ${this.maker}`);
        console.log(`Рік випуску - ${this.year}`);
        console.log(`Максимальна швидкість - ${this.speed}`);
        console.log(`Об'єм - ${this.v}`)
        if(this.driver){
            console.log(`Водій - ${this.driver.name}`)}
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.speed = newSpeed
    }
    this.changeYear = function (newYear) {
        this.year = newYear
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }
}
let car = new Car('BMW','Germany',1999,200,2.0);
car.drive();
car.info();
car.increaseMaxSpeed(300);
car.changeYear(2020);
car.addDriver({name:'Antoha',age:22});
car.info();
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, maker, year, speed, v) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.speed = speed;
        this.v = v;
    }
    drive = function() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }
    info = function(){
        console.log(`Модель - ${this.model}`);
        console.log(`Виробник - ${this.maker}`);
        console.log(`Рік випуску - ${this.year}`);
        console.log(`Максимальна швидкість - ${this.speed}`);
        console.log(`Об'єм - ${this.v}`)
        if(this.driver){
            console.log(`Водій - ${this.driver.name}`)}
    }
    increaseMaxSpeed = function (newSpeed) {
        this.speed = newSpeed
    }
    changeYear = function (newYear) {
        this.year = newYear
    }
    addDriver = function (driver) {
        this.driver = driver
    }
}
let car2 = new Car2('Renault','France',2000,220,2.2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(290);
car2.changeYear(2023);
car2.addDriver({name:'TOLIK',age:100});
car2.info();
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Princess(name,age,footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
let princessesArray = [
    new Princess('julia',22,39),
    new Princess('Iryna',21,37),
    new Princess('Anna',20,38),
    new Princess('Lera',22,36),
    new Princess('Alina',23,40),
    new Princess('Diana',40,41),
    new Princess('Svetlana',22,42),
    new Princess('Viktoria',24,43),
    new Princess('Olha',26,44),
    new Princess('Olena',22,45)
]
let prince = {
    name:'Kokos',
    age:25,
    shoeSize:40
}
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const princess of princessesArray) {
    if(princess.footSize === prince.shoeSize){
        console.log(princess.name)
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(princessesArray.find(value => value.footSize === prince.shoeSize).name);