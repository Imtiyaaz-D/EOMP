// debugger
let table = document.querySelector(".box")
const addBtn = document.querySelector('#add-btn')
let products = [{
    id : "1",
    name:"Converse-Black",
    price : 600,
    image : "https://i.postimg.cc/Ghg2F0DS/images-shoe-all-star.jpg",
    Description : "A pair of black Converse takkies",
},
{   id : "2",
    name:"Converse-White",
    price : 750,
    image : "https://i.postimg.cc/mDPVrWQf/istockphoto-175537625-612x612-convserve-shoe-3.jpg",
    Description : "A pair of white Converse takkies",
},
{
    id : "3",
    name:"Vans",
    price : 350,
    image : "https://i.postimg.cc/nhHhWGKQ/images-vans-shoe-2.jpg",
    Description : "A pair of vans takkies",
},
]
// console.log(products)
products.forEach(item =>{
    table.innerHTML +=
    `<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>R${item.price}</td>
    <td><img src="${item.image}" alt="${item.name}"></td>
    <td>${item.Description}</td>
    <td><button>add</button></td>
    <td><button>edit</button></td>
  </tr>
  `
})

addBtn.addEventListener('click',addItem)

// function addItem(e){
//     event.preventDefault();
//     if{ data.}
// }




// let btn = document.querySelector('.btn')
// const data = JSON.parse(localStorage.getItem('data'))?JSON.parse(localStorage.getItem('data')) : [{
//     id : "1",
//     name:"Converse-Black",
//     price : 600,
//     image : "https://i.postimg.cc/Ghg2F0DS/images-shoe-all-star.jpg",
//     Description : "A pair of black Converse tekkies",
// },
// {   id : "2",
//     name:"Converse-White",
//     price : 750,
//     image : "https://i.postimg.cc/mDPVrWQf/istockphoto-175537625-612x612-convserve-shoe-3.jpg",
//     Description : "A pair of white Converse tekkies",
// },
// {
//     id : "3",
//     name:"Vans",
//     price : 350,
//     image : "https://i.postimg.cc/nhHhWGKQ/images-vans-shoe-2.jpg",
//     Description : "A pair of vans tekkies",
// },
// ]     
// console.log(data)
// const items = JSON.stringify(localStorage.setItem('data'))
// add btn
// const addBtn = document.querySelector('.btp')
// addBtn.addEventListener('click',addItem)
// function addBtn() {
    
// }