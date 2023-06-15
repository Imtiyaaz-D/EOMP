// debugger
let table = document.querySelector("#product-table")
// let output =document.querySelector('#items')
// let table = document.querySelector(".box")
const addBtn = document.querySelector('#add-btn')
let tempName = document.querySelector('.intpName')
let tempPrice = document.querySelector('.intpPrice')
let tempImage = document.querySelector('.intpImg')
let tempDescription = document.querySelector('.intpDescr')
let tempID = 0;
// let output = document.querySelector(".output")//output
// const productsD = JSON.parse(localStorage.getItem("item"))
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
    image : "https://i.postimg.cc/kMcM2shX/Converse-all-star-yellow-612x612.jpg",
    Description : "A pair of vans takkies",
},
]))


// Table Render
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
        <td>${data.Description}</td>

        <td><button class ="del">delete</button></td>

        <td><button>edit</button></td>
      </tr>
        `
    })
    // deleteButton()
}

renderData()
// let btn = document.querySelector('#btn')

function deleteButtons(){
    removeBtns = [...document.querySelector('.close-btn')];
    removeBtns.forEach((item)=>{
        item.addEventListener('click',deleteItem)
    })
}


// delete
// function deleteItem(event){
//     let startPoint = removeBtns.indexOf(event.target);
//     products.splice(startPoint, 1);
//     localStorage.setItem('products',JSON.stringify(products))
//     update();
// }
let remove = document.getElementsByClassName('del')
console.log(remove)
for (let i = 0; i< remove.length; i++){
    let button = remove[i]
    button.addEventListener('click', function(event){
      let buttonAccesed=event.target
      buttonAccesed.parentElement.parentElement.remove()
        updateTotal()
    })
}

// function adminData(){
//     table.forEach((item)=>{
//         productsD.innerHTML+=
//     `
//     <tr>
//     <td id="td1">${item.Name}</td>
//     <td id="td2"><img class ="image-fluid image"scr="${item.imageUrl}" loading="lazy" alt="${item.Name}"></td>
//     <td id="td3">R${item.price}</td>
//     <td id="td4">${item.Description}</td>
//     <td id="td5"></td>
//     </tr>
//     `
//     })  
// }



// adminData()

// add button
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
})
