let products = document.querySelector('.product-cards')
let output = document.querySelector("#output")

let items = JSON.parse(localStorage.getItem('item'))
items.forEach(item =>{
    products.innerHTML +=`
    <div class="row justify-content-center gap-3" id="products">
    <div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="${item.name} loading="lazy">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.Description}</p>
      <a href="../html/checkout.html" class="btn btn-primary">Add to cart</a>
    </div>
    </div>
  </div>`
})
// admin data
let productsD = JSON.parse(localStorage.getItem("item"))?
JSON.parse(localStorage.getItem("item")) : localStorage.setItem("item",JSON.stringify([
  {
  id:1,
  name:"clot X converse",
  price:1000,
  imageURL:"https://i.postimg.cc/XNd1PTbs/clot-x-converse-chuck-70-high-panda.jpg",
  Description:"Converse collab clot",
},
{
  id:2,
  name:"",
  price:"",
  imageURL:"https://i.postimg.cc/GtgjDJDS/Converse-alll-star-off-black.jpg",
  Description:"",
},
{
  id:3,
  name:"",
  price:"",
  imageURL:"https://i.postimg.cc/25q3jdjS/Converse-all-star-leather.jpg",
  Description:"",
},
{
  id:4,
  name:"",
  price:"",
  imageURL:"https://i.postimg.cc/ncHz9fV5/converse-all-star-pikachu-1.jpg",
  Description:"",
},
{
  id:5,
  name:"",
  price:"",
  imageURL:"https://i.postimg.cc/NjZ2HCzH/converse-navy-shoes.jpg",
  Description:"",
},
{
  id:6,
  name:"",
  price:"",
  imageURL:"https://i.postimg.cc/BbJVdY6V/Converse-all-star-yellow-612x612.jpg",
  Description:"",
},
])); 