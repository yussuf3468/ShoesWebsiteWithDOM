let productArr = [
    {image: 'css/images/m1.jpg', shoeName: 'Oxford', price: 1350, itemCode: 'OX1234'},
    {image: 'css/images/m6.jpg', shoeName: 'Stilettos', price: 1280, itemCode: 'ST5678'},
    {image: 'css/images/m5.jpg', shoeName: 'Sneakers', price: 1508, itemCode: 'SN9101'},
    {image: 'css/images/m4.jpg', shoeName: 'Loafers', price: 2785, itemCode: 'LF2345'},
    {image: 'css/images/6m.jpg', shoeName: 'Sandals', price: 1206, itemCode: 'SD6789'},
    {image: 'css/images/7m.jpg', shoeName: 'Boots', price: 4280, itemCode: 'BT1122'},
    {image: 'css/images/8m.jpg', shoeName: 'Espadrilles', price: 2050, itemCode: 'ES3344'},
    {image: 'css/images/9m.jpg', shoeName: 'Flip-Flops', price: 6890, itemCode: 'FF5566'},
    {image: 'css/images/g6.jpg', shoeName: 'Moccasins', price: 2660, itemCode: 'MC7788'},
    {image: 'css/images/4f.jpg', shoeName: 'Wedges', price: 3170, itemCode: 'WG9900'},
    {image: 'css/images/g2.jpg', shoeName: 'Classic Wedges', price: 3200, itemCode: 'WG9901'},
    {image: 'css/images/g3.jpg', shoeName: 'Elegant Heels', price: 4500, itemCode: 'EH9902'},
    {image: 'css/images/g7.jpg', shoeName: 'Casual Flats', price: 2700, itemCode: 'CF9903'},
    {image: 'css/images/kl.jpg', shoeName: 'Sporty Sneakers', price: 3900, itemCode: 'SS9904'},
    {image: 'css/images/km.jpg', shoeName: 'Formal Loafers', price: 5000, itemCode: 'FL9905'},
    {image: 'css/images/kj.jpg', shoeName: 'Chic Sandals', price: 3400, itemCode: 'CS9906'}
];

let productContainer = document.getElementById('item');
productContainer.innerHTML = productArr.map(item =>
    `
        <div class="item">
            <img src="${item.image}">
            <h3>${item.shoeName}</h3>
            <p>Price: Kes ${item.price}</p>
            <p>Code: ${item.itemCode} </p>
            <button onclick='view("${item.itemCode}")' class='yte'>View</button>
        </div>`
).join('');

function view(itemCode) {
    let url = `/select.html?${itemCode}`;
    window.open(url, '_blank');
}


let hero = document.getElementById('h2')
hero.innerHTML = 'Discover Comfort and Style in Every Step'
let p1 = document.getElementById('p1')
p1.innerHTML = "Step into a world where fashion meets comfort. Our collection of premium shoes is designed to elevate your style while providing unbeatable comfort for any occasion. Whether you're looking for casual sneakers, elegant heels, or durable running shoes, we've got the perfect pair to suit your every need. Explore our latest arrivals and find your next favorite pair today!"


document.getElementById('container9').style.backgroundImage = "url(css/images/g1.jpg)";

document.getElementById('p2').innerHTML = 'From sleek and sophisticated oxfords to rugged and casual boots, male shoes come in a variety of designs, materials, and colors. They can be made from leather, suede, or synthetic materials, and often feature intricate details such as brogue patterns, buckles, or laces'
