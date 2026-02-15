const products = [
{ name:"WIHOLL Two Piece Sets", category:"clothes", price:"PKR 6,877/_", img:"https://m.media-amazon.com/images/I/61DY7BTj6AL.*AC_SY741*.jpg", link:"https://amzn.to/3MqywF8" },
{ name:"BAGSMART Gym Bag for Women", category:"bags", price:"PKR 4994", img:"https://m.media-amazon.com/images/I/61WKa4fHYkL.*AC_SX569*.jpg", link:"https://amzn.to/4akrNWu" },
{ name:"Inspire Black Nitrile Gloves", category:"Gloves", price:"PKR 4,000/_", img:"https://m.media-amazon.com/images/I/71u2II-WKSL._AC_SX679_.jpg", link:"https://amzn.to/4tEmzfH" },
{ name:"Premium Perfume 2", category:"perfume", price:"$99", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Designer Bag 1", category:"bag", price:"$149", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Designer Bag 2", category:"bag", price:"$179", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Smart Watch", category:"tech", price:"$299", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Wireless Headphones", category:"tech", price:"$199", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Luxury Watch 3", category:"watch", price:"$189", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Premium Perfume 3", category:"perfume", price:"$79", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Designer Bag 3", category:"bag", price:"$159", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Bluetooth Speaker", category:"tech", price:"$129", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Luxury Watch 4", category:"watch", price:"$279", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Premium Perfume 4", category:"perfume", price:"$109", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Designer Bag 4", category:"bag", price:"$189", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Gaming Mouse", category:"tech", price:"$59", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Luxury Watch 5", category:"watch", price:"$299", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Premium Perfume 5", category:"perfume", price:"$119", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Designer Bag 5", category:"bag", price:"$199", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Smart Earbuds", category:"tech", price:"$149", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" }
];

const grid=document.getElementById("productGrid");
const searchInput=document.getElementById("searchInput");
const categoryFilter=document.getElementById("categoryFilter");

function displayProducts(list){
grid.innerHTML="";
list.forEach(p=>{
grid.innerHTML+=`

<div class="product-card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p class="price">${p.price}</p>
<a href="${p.link}" target="_blank" class="buy-btn">Buy Now</a>
</div>
`;
});
}

displayProducts(products);

function filterProducts(){
let s=searchInput.value.toLowerCase();
let c=categoryFilter.value;

let filtered=products.filter(p=>{
return (p.name.toLowerCase().includes(s)) &&
(c==="all"||p.category===c);
});

displayProducts(filtered);
}

searchInput.addEventListener("input",filterProducts);
categoryFilter.addEventListener("change",filterProducts);


