const products = [
{ name:"Luxury Watch 1", category:"watch", price:"$199", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Luxury Watch 2", category:"watch", price:"$249", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
{ name:"Premium Perfume 1", category:"perfume", price:"$89", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
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

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function displayProducts(filteredProducts){
grid.innerHTML="";
filteredProducts.forEach(product=>{
grid.innerHTML+=`
<div class="product-card">
<img src="${product.img}">
<h3>${product.name}</h3>
<p>${product.price}</p>
<a href="${product.link}" target="_blank" class="buy-btn">Buy Now</a>
</div>
`;
});
}

displayProducts(products);

searchInput.addEventListener("input",()=>{
filterProducts();
});

categoryFilter.addEventListener("change",()=>{
filterProducts();
});

function filterProducts(){
let searchValue = searchInput.value.toLowerCase();
let categoryValue = categoryFilter.value;

let filtered = products.filter(product=>{
let matchesSearch = product.name.toLowerCase().includes(searchValue);
let matchesCategory = categoryValue === "all" || product.category === categoryValue;
return matchesSearch && matchesCategory;
});

displayProducts(filtered);
}
