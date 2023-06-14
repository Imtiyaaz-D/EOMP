// debugger
// let output =document.querySelector('#items')
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
    image : "https://i.postimg.cc/kMcM2shX/Converse-all-star-yellow-612x612.jpg",
    Description : "A pair of vans takkies",
},
]))


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
        <td><button id="deleteBtn">delete</button></td>
        <td><button>edit</button></td>
      </tr>
        `
    })
    // deleteButton()
}

renderData()




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

// delete button
// function deleteButton(data){
//     remove = [...document.querySelectorAll("#deleteBtn")];
//     remove.forEach((data)=>{
//       data.addEventListener('click', removeProduct)
//     })
//     function removeProduct(event){
//       output.innerHTML = ""
//       let start = remove.indexOf(event.target);
//       products.splice(start, 1);
//       localStorage.setItem("product-list", JSON.stringify(products))
//       displayProduct();
//     }
//     }



