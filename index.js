let product = document.getElementById('products');
let db
function getProduct() {
    axios.get('https://655f2b37879575426b44b8f7.mockapi.io/products')
        .then(res => {
             db = res.data;
            // console.log(db);
            db.forEach(item => {
                let div = document.createElement('div')
                div.className = 'productCard'
                div.innerHTML = `
                <img style="width: 100%;" src="${item.image}" alt="">
                <div class="heart">
                    <i style="font-size: 20px;" class="fa-regular fa-heart"></i>
                </div>
            </div>
            <p>${item.name}</p>
            <p class="fiyat">${item.price} TL</p>
            <button onclick="addToBasket(${item.id})">Add To Basket</button>

    `
    product.appendChild(div)
            })
        })
}

getProduct()
function addToBasket(itemindex){
    let datalar=[];
    datalar.push(db.find(item => item.id === itemindex))
    console.log(datalar);
    axios.post('https://655f2b37879575426b44b8f7.mockapi.io/basket',datalar)
}


