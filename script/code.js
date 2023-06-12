// const carousel = document.querySelector("carousel")

let tabl = document.querySelector('table-cont')

// let products = [];
let shoe = [{
    id : "1",
    name:"Converse-Black",
    price : 600,
    image : "https://i.postimg.cc/28DN5jKQ/images-shoe-all-star.jpg",
    Description : "A pair of black Converse tekkies",
},
{   id : "2",
    name:"Converse-White",
    price : 750,
    image : "https://i.postimg.cc/XJWF1CvH/istockphoto-175537625-612x612-convserve-shoe-3.jpg",
    Description : "A pair of white Converse tekkies",
},
{
    id : "3",
    name:"Vans",
    price : 350,
    image : "https://i.postimg.cc/nhHhWGKQ/images-vans-shoe-2.jpg",
    Description : "A pair of vans tekkies",
},
]
console.log(shoe)
shoe.forEach(data =>{
    tabl.innerHTML +=
    `<tr>
    <th>${item.id}</th>
    <th>${item.name}</th>
    <th><img src="${item.image}" alt="${item.name}"></th>
    <th>${item.Description}</th>
    <th><button>add</button></th>
    <th><button>delete</button></th>
  </tr>`
})
