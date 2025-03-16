let box=document.createElement("div");
box.className='box'
let loader = document.getElementById("loader");


function fetchData(){
    fetch("https://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(data=>displayData(data))
    .catch(err=>console.error(err));
}
function displayData(things){
     for (let obj of things){
        let item=document.createElement("div")
        item.className='item'
        item .innerHTML=`
         <img src='${obj.image}'class='image'>
         <p class='title'> ${obj.title}<span>${obj.price}</span></p>
         <p class='description'> ${obj.description}</p>
         <p class='rating'>${obj.rating.rate}</p>
         `;
        box.appendChild(item);  
     }
     
loader.remove(); 
document.body.appendChild(box)
    
    }
  
fetchData();


 


