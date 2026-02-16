const products = [

{
name:"Nike Hoodie",
category:"clothes",
price:"Rs 2500",
oldPrice:"Rs 3500",
stock:"Limited",
img:"https://via.placeholder.com/200",
link:"https://www.amazon.com/?tag=YOURAFFILIATE"
},

{
name:"Smart Watch",
category:"watch",
price:"Rs 4500",
oldPrice:"Rs 6000",
stock:"Only 5 left",
img:"https://via.placeholder.com/200",
link:"https://www.amazon.com/?tag=YOURAFFILIATE"
}

];

const grid = document.getElementById("productGrid");

function renderProducts(){
grid.innerHTML="";

products.forEach(p=>{

grid.innerHTML += `
<div class="product-card">

<div class="stock">${p.stock}</div>

<img src="${p.img}">

<h3>${p.name}</h3>

<div class="price">
<span class="old">${p.oldPrice}</span><br>
<b>${p.price}</b>
</div>

<a href="${p.link}" target="_blank" class="buy-btn">
Buy Now
</a>

</div>
`;
});

}

renderProducts();
