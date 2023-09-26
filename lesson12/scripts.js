// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів

fetch("http://jsonplaceholder.typicode.com/users")
    .then(value => value.json())
    .then(users => {
        let block = document.createElement('ul');
        for (const user of users) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.innerText = `Id - ${user.id}, ${user.name}`;
            a.href = `user-details.html?id=${user.id}`
            li.appendChild(a);
            block.appendChild(li)
        }
        document.body.appendChild(block)
    })
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)