const products = [
    {id: 1, title: 'Notebook', price: 2000, img: src = "../img/1.jpg"},
    {id: 2, title: 'Mouse', price: 20, img: src = "../img/2.jpg"},
    {id: 3, title: 'Keyboard', price: 200, img: src = "../img/3.jpg"},
    {id: 4, title: 'Gamepad', price: 50, img: src = "../img/4.jpg"},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, price, img) => {
    return `<div class="product-item">
                <img src = ${img}>
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title,item.price,item.img));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);