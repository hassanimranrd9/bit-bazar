const products = [
  // --- Original 2 products remain unchanged ---
  { 
    name:"WIHOLL Two Piece Sets", 
    category:"clothes", 
    price:"PKR 6,877/_", 
    img:"https://m.media-amazon.com/images/I/61DY7BTj6AL._AC_SY741_.jpg", 
    link:"https://amzn.to/3MqywF8",
    discount: null,
    stock: 15,
    rating: 4.5,
    tag: "Hot"
  },
  { 
    name:"BAGSMART Gym Bag for Women", 
    category:"bags", 
    price:"PKR 4994", 
    img:"https://m.media-amazon.com/images/I/61WKa4fHYkL._AC_SX569_.jpg", 
    link:"https://amzn.to/4akrNWu",
    discount: 10,
    stock: 8,
    rating: 4.0,
    tag: "New Arrival"
  },

  // --- Rest of products professional features added ---
  { name:"Premium Perfume 1", category:"perfume", price:89, discount:10, stock:5, rating:4, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"New Arrival" },
  { name:"Premium Perfume 2", category:"perfume", price:99, discount:15, stock:3, rating:4.2, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"Hot" },
  { name:"Designer Bag 1", category:"bag", price:149, discount:20, stock:7, rating:4.8, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"Hot" },
  { name:"Designer Bag 2", category:"bag", price:179, discount:null, stock:0, rating:4.5, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"Limited" },
  { name:"Smart Watch", category:"tech", price:299, discount:30, stock:10, rating:4.6, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"New Arrival" },
  { name:"Wireless Headphones", category:"tech", price:199, discount:10, stock:12, rating:4.4, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"Hot" },
  { name:"Luxury Watch 3", category:"watch", price:189, discount:5, stock:6, rating:4.2, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"Hot" },
  { name:"Premium Perfume 3", category:"perfume", price:79, discount:null, stock:2, rating:3.9, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"Limited" },
  { name:"Designer Bag 3", category:"bag", price:159, discount:15, stock:4, rating:4.7, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"Hot" },
  { name:"Bluetooth Speaker", category:"tech", price:129, discount:20, stock:9, rating:4.3, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"New Arrival" },
  { name:"Luxury Watch 4", category:"watch", price:279, discount:25, stock:5, rating:4.8, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"Hot" },
  { name:"Premium Perfume 4", category:"perfume", price:109, discount:10, stock:6, rating:4.1, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"New Arrival" },
  { name:"Designer Bag 4", category:"bag", price:189, discount:20, stock:8, rating:4.5, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"Hot" },
  { name:"Gaming Mouse", category:"tech", price:59, discount:5, stock:15, rating:4.0, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"New Arrival" },
  { name:"Luxury Watch 5", category:"watch", price:299, discount:10, stock:3, rating:4.9, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"Hot" },
  { name:"Premium Perfume 5", category:"perfume", price:119, discount:15, stock:5, rating:4.2, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"New Arrival" },
  { name:"Designer Bag 5", category:"bag", price:199, discount:null, stock:7, rating:4.6, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"Hot" },
  { name:"Smart Earbuds", category:"tech", price:149, discount:10, stock:10, rating:4.4, img:"https://via.placeholder.com/250", link:"YOUR_AFFILIATE_LINK", tag:"New Arrival" }
];

// Function to calculate discounted price
function getDiscountedPrice(price, discount) {
  if (!discount) return price;
  return (price - (price * discount) / 100).toFixed(2);
}

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function displayProducts(filteredProducts) {
  grid.innerHTML = "";
  filteredProducts.forEach(product => {
    let discountedPrice = getDiscountedPrice(parseFloat(product.price.replace(/[^0-9.]/g, '')), product.discount);
    let stockText = product.stock > 0 ? `${product.stock} left` : "Out of Stock";

    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += i <= Math.floor(product.rating) ? "★" : "☆";
    }

    grid.innerHTML += `
      <div class="product-card">
        ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ""}
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">
          ${product.price.includes("PKR") ? product.price : "$" + discountedPrice} 
          ${product.discount ? `<span class="old-price">$${product.price}</span>` : ""}
        </p>
        <p class="rating">${stars}</p>
        <p class="stock">${stockText}</p>
        <a href="${product.link}" target="_blank" class="buy-btn ${product.stock <= 0 ? "disabled" : ""}">
          ${product.stock > 0 ? "Buy Now" : "Sold Out"}
        </a>
      </div>
    `;
  });
}

displayProducts(products);

searchInput.addEventListener("input", () => filterProducts());
categoryFilter.addEventListener("change", () => filterProducts());

function filterProducts() {
  let searchValue = searchInput.value.toLowerCase();
  let categoryValue = categoryFilter.value;

  let filtered = products.filter(product => {
    let matchesSearch = product.name.toLowerCase().includes(searchValue);
    let matchesCategory = categoryValue === "all" || product.category === categoryValue;
    return matchesSearch && matchesCategory;
  });

  displayProducts(filtered);
}
