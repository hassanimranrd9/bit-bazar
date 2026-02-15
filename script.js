const products = [
{ name:"WIHOLL Two Piece Sets", category:"clothes", price:6877, oldPrice:7500, stock:7, img:"https://m.media-amazon.com/images/I/61DY7BTj6AL._AC_SY741_.jpg", link:"https://amzn.to/3MqywF8" },

{ name:"BAGSMART Gym Bag for Women", category:"bags", price:4994, oldPrice:6200, stock:5, img:"https://m.media-amazon.com/images/I/61WKa4fHYkL._AC_SX569_.jpg", link:"https://amzn.to/4akrNWu" },

{ name:"Premium Perfume 1", category:"perfume", price:89, oldPrice:120, stock:3, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Premium Perfume 2", category:"perfume", price:99, oldPrice:140, stock:8, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Designer Bag 1", category:"bag", price:149, oldPrice:200, stock:6, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Smart Watch", category:"tech", price:299, oldPrice:350, stock:4, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" }
];

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

let cart = [];

function displayProducts(list){
grid.innerHTML="";

list.forEach((product,index)=>{

let discount = product.oldPrice - product.price;

let stockHTML = product.stock <= 3 
? `<span class="stock low">Only ${product.stock} left</span>`
: `<span class="stock">In Stock</span>`;

grid.innerHTML += `
<div class="product-card luxury">
<img src="${product.img}">

<h3>${product.name}</h3>

<div class="price-box">
<span class="new">PKR ${product.price}</span>
<span class="old">PKR ${product.oldPrice}</span>
<span class="discount">-${discount}</span>
</div>

${stockHTML}

<div class="btns">
<button onclick="addToCart(${index})" class="cart-btn">Add Cart</button>
<a href="${product.link}" target="_blank" onclick="trackClick('${product.name}')" class="buy-btn">Buy Now</a>
</div>

</div>
`;
});

}

displayProducts(products);

function filterProducts(){
let searchValue = searchInput.value.toLowerCase();
let categoryValue = categoryFilter.value;

let filtered = products.filter(p=>{
let matchSearch = p.name.toLowerCase().includes(searchValue);
let matchCat = categoryValue==="all" || p.category===categoryValue;
return matchSearch && matchCat;
});

displayProducts(filtered);
}

searchInput.addEventListener("input",filterProducts);
categoryFilter.addEventListener("change",filterProducts);

function addToCart(index){
cart.push(products[index]);
alert("Added to cart 🛒");
console.log(cart);
}

function trackClick(name){
console.log("Amazon click:",name);
}
