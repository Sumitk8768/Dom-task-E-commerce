const productCard = document.querySelectorAll(".product-card");
const nav = document.querySelector("nav")
const cursor = document.querySelector(".cursor");
const body = document.body
const productCardContainer = document.querySelector(".product-list .product-card-container")
const productList = document.querySelector(".product-list")

const productData = [
  {
    category: "Jeans",
    brandName: "JAAR FASHION",
    productName: "Men Jogger Fit Grey Jeans",
    rating: 3.6,
    price: 469,
    imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=500",
    buyUrl: "https://www.flipkart.com/search?q=jaar+fashion+jeans"
  },
  {
    category: "Jeans",
    brandName: "LEVI'S",
    productName: "501 Original Straight Fit",
    rating: 4.7,
    price: 2599,
    imageUrl: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=500",
    buyUrl: "https://www.levi.in/men/clothing/jeans/501"
  },
  {
    category: "Jeans",
    brandName: "ROADSTER",
    productName: "Skinny Fit Black Jeans",
    rating: 4.0,
    price: 1249,
    imageUrl: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/jean/v/z/d/32-rd-aw25-m-jn-fk-001-roadster-original-imahdgd6wxs8fnve.jpeg?q=90",
    buyUrl: "https://www.myntra.com/roadster-jeans"
  },
  {
    category: "Jeans",
    brandName: "DENIM CO",
    productName: "Slim Fit Blue Jeans",
    rating: 4.2,
    price: 899,
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=500",
    buyUrl: "https://www.ajio.com/men-jeans/c/830216001"
  },
  {
    category: "Jeans",
    brandName: "HIGHLANDER",
    productName: "Tapered Light Blue Jeans",
    rating: 3.9,
    price: 750,
    imageUrl: "https://rukminim1.flixcart.com/image/1536/1536/xif0q/jean/l/b/w/-original-imahanzz7jzfhdhw.jpeg?q=90",
    buyUrl: "https://www.highlanderindia.com/collections/jeans"
  },
  {
    category: "Jeans",
    brandName: "WRANGLER",
    productName: "Texas Authentic Straight",
    rating: 4.5,
    price: 1899,
    imageUrl: "https://static.aceomni.cmsaceturtle.com/prod/product-image/aceomni/Wrangler/Monobrand/WMJN006611/WMJN006611_1.jpg",
    buyUrl: "https://www.wrangler.in/men/jeans"
  },
  {
    category: "Jeans",
    brandName: "JACK & JONES",
    productName: "JJ Glenn Slim Fit Jeans",
    rating: 4.3,
    price: 2199,
    imageUrl: "https://www.jackjones.in/cdn/shop/files/219825801_g0.jpg?v=1745329852&width=1000",
    buyUrl: "https://www.jackjones.in/jeans-men"
  },
  {
    category: "Jeans",
    brandName: "PEPE JEANS",
    productName: "Cashel Regular Fit",
    rating: 4.1,
    price: 1599,
    imageUrl: "https://images.pepejeans.com/dw/image/v2/BCDD_PRD/on/demandware.static/-/Sites-pjg-master-catalog/default/dwf9291ac2/images/hi-res/PM206318_Z45_000_02_MO.jpg?sw=600&q=90",
    buyUrl: "https://www.pepejeans.in/men/clothing/jeans"
  },
  {
    category: "Jeans",
    brandName: "SPYKAR",
    productName: "Super Skinny Dark Blue",
    rating: 3.8,
    price: 1350,
    imageUrl: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?auto=format&fit=crop&q=80&w=500",
    buyUrl: "https://www.spykar.com/collections/men-jeans"
  },
  {
    category: "Jeans",
    brandName: "FLYING MACHINE",
    productName: "Prince Slim Tapered",
    rating: 4.0,
    price: 1100,
    imageUrl: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=500",
    buyUrl: "https://www.nnnow.com/flying-machine-men-jeans"
  }
];

let sum = ''

productData.forEach(function(elem){
    sum += `
       <div class="product-card">
                            <div class="img-container">
                                <img src="${elem.imageUrl}" alt="">
                            </div>
                            <div class="info">

                               <h4 class="brand">${elem.brandName}</h4>
                               <p class="Pro-info">${elem.productName}</p>
                               <div class="rating-price">
                                  <div class="rating">
                                       <i class="ri-shining-2-fill"></i>
                                       <span>${elem.rating}</span>
                                  </div>
                                  <p class="price">₹ ${elem.price}</p>
                               </div>
                               <button class="Add-cart-btn">Add to Cart</button>
                               <button class="buy-now">Buy Now</button>
                 </div>
       </div>
       
    `
})
productCardContainer.innerHTML = sum

console.log(productCardContainer)
console.log(sum);


productCard.forEach(function (elem) {

    const btn = elem.querySelector("button");

    btn.addEventListener("click", function () {

        if (btn.textContent === "Add to Cart") {
            btn.textContent = "Remove from cart";
        } else {
            btn.textContent = "Add to Cart";
        }

    });

})

body.addEventListener('wheel', function (dets) {
    if (dets.deltaY > 0) {
        nav.style.transform = 'translateY(-100%)'
    } else {
        nav.style.transform = 'translateY(0%)'
    }
})

body.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

