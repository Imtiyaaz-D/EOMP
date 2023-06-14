let products = document.querySelector('.product-cards')
let items = JSON.parse(localStorage.getItem('item'))
items.forEach(item =>{
    products.innerHTML +=
    `<div class="card col-6" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="${item.name}">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.Description}</p>
      <a href="../html/checkout.html" class="btn btn-primary">Add to cart</a>
    </div>
  </div>`
})
// add to list
const btnBtnPrimary = document.querySelector(".btn")
 btnBtnPrimary.addEventListener('click',add =>{
items.push()
 })