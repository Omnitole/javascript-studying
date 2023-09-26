let products = JSON.parse(localStorage.getItem('cart'));

let wrap = document.createElement('div');
for (let product of products) {
    let block = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerText = `${product.id} ${product.name}`;
    let body = document.createElement('p');
    body.innerText = `Amount - ${product.amount}, price - ${product.price}`;
    let image = document.createElement('img');
    image.src = `${product.img}`;
    let button = document.createElement('button');
    button.innerText = 'Видалити цей товар';
    button.onclick = function () {
        const index = products.findIndex(item => {
            return item.id === product.id;
        })
        products.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(products));
        wrap.removeChild(block)
    }
    block.append(h2, body, image, button);
    wrap.appendChild(block)
}
document.body.appendChild(wrap)
let deleteAllButton = document.createElement('button');
deleteAllButton.innerText = 'Очистити корзину';
deleteAllButton.onclick = function () {
    localStorage.setItem('cart', JSON.stringify([]))
    document.body.removeChild(wrap)
}
document.body.appendChild(deleteAllButton)
