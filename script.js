const products = [
  { name:"WIHOLL Two Piece Sets", category:"clothes", price:"PKR 6,877/_", oldPrice:"PKR 8,500/_", stock:"Limited", img:"https://m.media-amazon.com/images/I/61DY7BTj6AL._AC_SY741_.jpg", link:"https://amzn.to/3MqywF8" },
  { name:"Luxury Watch 2", category:"watch", price:"$249", oldPrice:"$299", stock:"In Stock", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
  { name:"Nike Hoodie", category:"clothes", price:"$99", oldPrice:"$129", stock:"Limited", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
  { name:"Bluetooth Headphones", category:"tech", price:"$129", oldPrice:"$179", stock:"In Stock", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" },
  { name:"Designer Bag", category:"bag", price:"$199", oldPrice:"$249", stock:"Limited", img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK" }
];

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function displayProducts(filteredProducts){
  grid.innerHTML = "";
  filteredProducts.forEach(p => {
    grid.innerHTML += `
    <div class="product-card">
      ${p.stock ? `<div class="stock-badge">${p.stock}</div>` : ""}
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <div class="price">
        ${p.oldPrice ? `<span class="old-price">${p.oldPrice}</span>` : ""}
        <b>${p.price}</b>
      </div>
      <a href="${p.link}" target="_blank" class="buy-btn">Buy Now</a>
    </div>
    `;
  });
}

function filterProducts(){
  let searchValue = searchInput.value.toLowerCase();
  let categoryValue = categoryFilter.value;
  let filtered = products.filter(p=>{
    let matchesSearch = p.name.toLowerCase().includes(searchValue);
    let matchesCategory = categoryValue === "all" || p.category.toLowerCase() === categoryValue.toLowerCase();
    return matchesSearch && matchesCategory;
  });
  displayProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
displayProducts(products);
