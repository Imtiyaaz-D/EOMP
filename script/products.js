let products = document.querySelector('.product-cards')
let items = [{
    id : "1",
    name:"Converse-Black",
    price : 600,
    image : "https://i.postimg.cc/Ghg2F0DS/images-shoe-all-star.jpg",
    Description : "A pair of black Converse tekkies",
},
{   id : "2",
    name:"Converse-White",
    price : 750,
    image : "https://i.postimg.cc/mDPVrWQf/istockphoto-175537625-612x612-convserve-shoe-3.jpg",
    Description : "A pair of white Converse tekkies",
},
{
    id : "3",
    name:"Vans",
    price : 350,
    image : "https://i.postimg.cc/nhHhWGKQ/images-vans-shoe-2.jpg",
    Description : "A pair of vans tekkies",
},
{
    id : "4",
    name:"Vans",
    price : 350,
    image : "https://i.postimg.cc/nhHhWGKQ/images-vans-shoe-2.jpg",
    Description : "A pair of vans tekkies",
},
{
    id : "5",
    name:"Vans",
    price : 350,
    image : "https://i.postimg.cc/nhHhWGKQ/images-vans-shoe-2.jpg",
    Description : "A pair of vans tekkies",
},
{
    id : "6",
    name:"Vans",
    price : 350,
    image : "https://i.postimg.cc/nhHhWGKQ/images-vans-shoe-2.jpg",
    Description : "A pair of vans tekkies",
},
{
    id : "7",
    name:"Vans",
    price : 350,
    image : "https://i.postimg.cc/nhHhWGKQ/images-vans-shoe-2.jpg",
    Description : "A pair of vans tekkies",
},
{
    id : "8",
    name:"Vans",
    price : 350,
    image : "https://i.postimg.cc/nhHhWGKQ/images-vans-shoe-2.jpg",
    Description : "A pair of vans tekkies",
},
{
    id : "9",
    name:"Vans",
    price : 350,
    image : "https://i.postimg.cc/nhHhWGKQ/images-vans-shoe-2.jpg",
    Description : "A pair of vans tekkies",
},
{
    id : "10",
    name:"Vans",
    price : 350,
    image : "https://i.postimg.cc/nhHhWGKQ/images-vans-shoe-2.jpg",
    Description : "A pair of vans tekkies",
},
]
items.forEach(item =>{
    products.innerHTML +=
    `<div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="${item.name}">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.Description}</p>
      <a href="#" class="btn btn-primary">Add to cart</a>
    </div>
  </div>`
})