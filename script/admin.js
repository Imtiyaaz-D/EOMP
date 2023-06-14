// debugger
let table = document.querySelector(".box")
const addBtn = document.querySelector('#add-btn')
let products = JSON.parse(localStorage.getItem('item')) ?
JSON.parse(localStorage.getItem('item')) : 
localStorage.setItem('item',JSON.stringify([{
    id : 1,
    name:"Converse-Black",
    price : 600,
    image : "https://i.postimg.cc/Ghg2F0DS/images-shoe-all-star.jpg",
    Description : "A pair of black Converse takkies",
},
{   id : 2,
    name:"Converse-White",
    price : 750,
    image : "https://i.postimg.cc/mDPVrWQf/istockphoto-175537625-612x612-convserve-shoe-3.jpg",
    Description : "A pair of white Converse takkies",
},
{
    id : 3,
    name:"Vans",
    price : 350,
    image : "https://i.postimg.cc/nhHhWGKQ/images-vans-shoe-2.jpg",
    Description : "A pair of vans takkies",
},
]))
// console.log(products)
// products.forEach(item =>{
//     table.innerHTML +=
//     `
//   `
//     products.appendChild(row)
// })

function renderData(){
    table.innerHTML = ''
    products.forEach((data) =>{
        table.innerHTML +=
        `
        <tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>R${data.price}</td>
        <td><img src="${data.image}" alt="${data.name}" style="width: 18rem"></td>
        <td>${data.description}</td>
        <td><button onclick="delete">delete</button></td>
        <td><button>edit</button></td>
      </tr>
        `
    })
}

renderData()

// // delete funtion 
// function deleteItem(productId){
//     products = products.filter((product)=>product.id !==productId);
//     updateLocalStorage();
//     refreshTable()
// }
// // update function
// function updateLocalStorage(){
//     localStorage.setItem('products',JSON.stringify(products));
//     refreshTable()
// }
// function products(){
//     products.appendChild(row);
// }



addBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let id = document.querySelector('#id').value;
    let name = document.querySelector('#name').value;
    let price = document.querySelector('#price').value;
    let image = document.querySelector('#img').value;
    let Description = document.querySelector('#description').value;

    products.push({
        id: id,
        name: name,
        price: price,
        image: image,
        Description: Description,
    })
    console.log(products)
    localStorage.setItem('item',JSON.stringify(products))
    renderData()
    // localStorage.getItem('item',JSON.parse(products))// products.push({
    //     id,
    //     name,
    //     price,
    //     image,
    //     Description,
    // })
    // console.log(products)
    // localStorage.setItem('item',JSON.stringify(products))
    // localStorage.getItem('item',JSON.parse(products))
})






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
//DOM
// let id =document.getElementById("id")
// let name =document.getElementById("id")
// let price =document.getElementById("id")
// let image =document.getElementById("id")
// let Description =document.getElementById("id")
//adding
// function add() {
    
// }