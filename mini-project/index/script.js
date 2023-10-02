fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrapper');
        for (const user of users) {
            let userBlock = document.createElement('div');
            userBlock.classList.add('user');
            userBlock.innerText = (`Name - ${user.name}, id - ${user.id}`);
            let button = document.createElement('button');
            button.innerText = 'More info about user';
            button.onclick = function (){
                window.location = `../user-details/user-details.html?id=${user.id}`
            }
            userBlock.append(button)
            wrap.append(userBlock)
        }
        document.body.append(wrap)
    })