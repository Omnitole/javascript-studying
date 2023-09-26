// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch("https://jsonplaceholder.typicode.com/users")
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let userBlock = document.createElement('div');
            userBlock.style.border = "2px solid black";
            userBlock.style.padding = "5px";
            userBlock.style.margin = "5px";
            userBlock.style.width = "300px";
            userBlock.style.display = 'flex';
            userBlock.style.flexDirection = "column";
            userBlock.style.alignItems = 'center'
            let h2 = document.createElement('h2');
            h2.innerText = `Id - ${user.id} ${user.username}`;
            let button = document.createElement('button');
            button.innerText = 'Show posts';
            button.onclick = function (e){
                e.preventDefault()
                fetch("https://jsonplaceholder.typicode.com/posts")
                    .then(value => value.json())
                    .then(posts => {
                        let postsBlock = document.createElement('div');
                        postsBlock.style.border = "2px solid black";
                        postsBlock.style.width = "600px"
                        for (const post of posts) {
                            if(post.userId === user.id){
                                let postBlock = document.createElement('div');
                                let h2 = document.createElement('h2');
                                h2.innerText = `Post id - ${post.id}, ${post.title}`;
                                let postBody = document.createElement('p');
                                postBody.innerText = `${post.body}`;
                                let postButton = document.createElement('button');
                                postButton.innerText = 'Show comments to this post';
                                postButton.onclick = function (ev) {
                                    ev.preventDefault()
                                    fetch("https://jsonplaceholder.typicode.com/comments")
                                        .then(value => value.json())
                                        .then(comments =>{
                                            let commentsBlock = document.createElement('div')
                                            commentsBlock.style.border = "2px solid black";
                                            commentsBlock.style.width = "600px";
                                            for (const comment of comments) {
                                                if(comment.postId === post.id){
                                                    let commentBlock = document.createElement('div');
                                                    let h3 = document.createElement('h3');
                                                    h3.innerText = `${comment.name}`
                                                    let commentBody = document.createElement('p');
                                                    commentBody.innerText = `${comment.body}`;
                                                    commentBlock.append(h3,commentBody);
                                                    commentsBlock.appendChild(commentBlock)
                                                }
                                            }
                                            document.body.appendChild(commentsBlock)
                                        }
                                    )
                                }
                                postBlock.append(h2,postBody,postButton);
                                postsBlock.append(postBlock)
                            }
                        }
                    document.body.appendChild(postsBlock)
                })
            }
            userBlock.append(h2,button)
            document.body.appendChild(userBlock)
        }
})
// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
let form = document.forms.f2
form.onsubmit = function (e) {
    e.preventDefault()
    let cartArray = JSON.parse(localStorage.getItem('cart')) || [];
    cartArray.push({
        id: cartArray.length+1,
        name: form.name.value,
        amount : form.amount.value,
        price : form.price.value,
        img : form.image.value
    })
    form.amount.value = '';
    form.name.value = '';
    form.price.value = '';
    form.image.value = '';
    localStorage.setItem('cart',JSON.stringify(cartArray))
}
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар