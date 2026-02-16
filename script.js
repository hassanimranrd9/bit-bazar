/* =========================
HASSAN LUXURY SCRIPT
========================= */

const products = [
{
name:"WIHOLL Two Piece Sets",
brand:"WIHOLL",
category:"clothes",
price:6877,
oldPrice:8200,
stock:7,
img:"https://m.media-amazon.com/images/I/61DY7BTj6AL.*AC_SY741*.jpg",
link:"https://amzn.to/3MqywF8"
},
{
name:"BAGSMART Gym Bag for Women",
brand:"BAGSMART",
category:"bags",
price:4994,
oldPrice:6200,
stock:5,
img:"https://m.media-amazon.com/images/I/61WKa4fHYkL.*AC_SX569*.jpg",
link:"https://amzn.to/4akrNWu"
},

/* demo */
{
name:"Luxury Hoodie",
brand:"ZARA",
category:"clothes",
price:3999,
oldPrice:5500,
stock:4,
img:"https://via.placeholder.com/250",
link:"#"
},
{
name:"Premium Perfume",
brand:"DIOR",
category:"perfume",
price:8999,
oldPrice:11000,
stock:3,
img:"https://via.placeholder.com/250",
link:"#"
}
];

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

/* ===== DISPLAY ===== */
function displayProducts(list){

grid.innerHTML="";

list.forEach((p,i)=>{

let discount = Math.round(((p.oldPrice - p.price)/p.oldPrice)*100);

/* brand show only for clothes */
let brandText = "";
if(p.category==="clothes" && p.brand){
brandText = `<div style="font-size:12px;color:#00ffcc">${p.brand}</div>`;
}

/* stock */
let stockText = p.stock<=3
? `<div style="color:#ff4d4d;font-size:12px">Only ${p.stock} left</div>`
: `<div style="color:#00ffcc;font-size:12px">In stock</div>`;

grid.innerHTML += `

<div class="product-card" style="animation:fadeUp .6s ease ${i*0.1}s forwards;opacity:0">

<img src="${p.img}">

${brandText}

<h3>${p.name}</h3>

<div style="margin-top:4px">
<span style="color:#ffcc00;font-weight:700;font-size:15px">
PKR ${p.price}
</span>

<span style="
text-decoration:line-through;
opacity:.5;
margin-left:8px;
font-size:13px;
">
PKR ${p.oldPrice} </span>

</div>

<div style="color:#00ffcc;font-size:12px;margin-top:2px">
${discount}% OFF
</div>

${stockText}

<a href="${p.link}" target="_blank" class="buy-btn">
Buy Now
</a>

</div>
`;
});

}

/* ===== FILTER ===== */
function filterProducts(){

let search = searchInput.value.toLowerCase();
let cat = categoryFilter.value;

let filtered = products.filter(p=>{
let s = p.name.toLowerCase().includes(search);
let c = cat==="all" || p.category===cat;
return s && c;
});

displayProducts(filtered);
}

searchInput.addEventListener("input",filterProducts);
categoryFilter.addEventListener("change",filterProducts);

/* ===== ANIMATION ===== */
const style = document.createElement("style");
style.innerHTML=`@keyframes fadeUp{
from{transform:translateY(30px);opacity:0}
to{transform:translateY(0);opacity:1}
}`;
document.head.appendChild(style);

/* ===== START ===== */
displayProducts(products);

