let product = document.getElementById('products');
let db
function getProduct() {
    product.innerHTML=''
    axios.get('https://655f2b37879575426b44b8f7.mockapi.io/basket')
        .then(res => {
            db = res.data;
            db.forEach((item) => {
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
            <button onclick="remove(${item.id})">Datalari sil</button>

    `
                product.appendChild(div)
            })
        })
}
getProduct()

async function remove(id) {
        await axios.delete(`https://655f2b37879575426b44b8f7.mockapi.io/basket/${id}`);
        getProduct();
}
