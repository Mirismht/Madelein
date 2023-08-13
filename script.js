// year update

function getCurrentYear() {
  let currentYear = new Date().getFullYear();
  document.querySelector(".year").textContent = currentYear;
}
getCurrentYear();

// To show the nav bar when we click the hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  const bar = document.getElementById("bar");
  const close = document.getElementById("close");
  const nav = document.getElementById("navbar");

  if (bar) {
    bar.addEventListener("click", function () {
      nav.classList.add("active");
    });
  } else {
  }

  if (close) {
    close.addEventListener("click", function () {
      nav.classList.remove("active");
    });
  }
});

// Cart Functionallity

const productEl = document.querySelector(".pro-container");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const checkoutEl = document.querySelector(".checkout");

//Cart Array
let cart = [];

//Function add to cart
function addToCart(id) {
  //to check if the product already exists in cart
  const existingCartItem = cart.find((item) => item.id === id);

  if (existingCartItem) {
    if (existingCartItem.numberOfUnits < existingCartItem.instock) {
      existingCartItem.numberOfUnits++;
    } else {
      alert("Cannot add more units. Product is out of stock!");
    }
  } else {
    const item = productsItems.find((product) => product.id === id);

    if (item) {
      cart.push({ ...item, numberOfUnits: 1 });
    }
  }

  updateCartInLocalStorage();
  updateCart();
}

//update data cart in locale storage
function updateCartInLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Update Cart
function updateCart() {
  cartItemsEl.innerHTML = "";
  renderCartItems(cart);
  renderSubtotal();
}

//calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(
    2
  )}`;
}

//render Cart items

function renderCartItems(cartData) {
  cartItemsEl.innerHTML = ""; // Clear previous items before rendering
  cartData.forEach((item) => {
    cartItemsEl.innerHTML += `
    <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${item.id})">
              <img src="${item.image}" alt="${item.name}" />
              <h4>${item.name}</h4>
            </div>
            <div class="unit-price"><small>$</small>${item.price}</div>
            <div class="units">
              <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id}, event)">-</div>
              <div class="number">${item.numberOfUnits}</div>
              <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id}, event)">+</div>
            </div>
          </div>
    `;
  });
}

//remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

//Change number of units
function changeNumberOfUnits(action, id, event) {
  event.preventDefault();
  const item = cart.find((item) => item.id === id);

  if (item) {
    let numberOfUnits = item.numberOfUnits;

    if (action === "minus" && numberOfUnits > 1) {
      numberOfUnits--;
    } else if (action === "plus" && numberOfUnits < item.instock) {
      numberOfUnits++;
    }
    numberOfUnits = Math.max(1, numberOfUnits);

    item.numberOfUnits = numberOfUnits;
    updateCartInLocalStorage();
    updateCart();
  }
}

const productsItems = [
  {
    id: 1,
    brand: "OVS",
    name: "Women Long Pleated Skirt",
    price: 78,
    instock: 10,
    image: "/img/products/f1.jpg",

    // Add other product data here
  },
  {
    id: 2,
    brand: "OVS",
    name: "Women Long Pleated Skirt",
    price: 88,
    instock: 10,
    image: "/img/products/f2.jpg",
    // Add other product data here
  },
  {
    id: 3,
    brand: "OVS",
    name: "Black Polka Dot Pleated Skirts",
    price: 50,
    instock: 10,
    image: "/img/products/f3.jpg",
    // Add other product data here
  },
  {
    id: 4,
    brand: "OVS",
    name: "Elastic High Waist Knitted Skirt",
    price: 66,
    instock: 10,
    image: "/img/products/f4.jpg",
    // Add other product data here
  },
  {
    id: 5,
    brand: "OVS",
    name: "Ribbon Satin Blouse",
    price: 70,
    instock: 10,
    image: "/img/products/f5.jpg",
    // Add other product data here
  },
  {
    id: 6,
    brand: "OVS",
    name: "smile loose version T-shirt",
    price: 100,
    instock: 10,
    image: "/img/products/f6.jpg",
    // Add other product data here
  },
  {
    id: 7,
    brand: "OVS",
    name: "Cotton Shirt",
    price: 55,
    instock: 10,
    image: "/img/products/f7.jpg",
    // Add other product data here
  },
  {
    id: 8,
    brand: "adidas",
    name: "Bandage Bow Shirring Blouse",
    price: 72,
    instock: 10,
    image: "/img/products/f8.jpg",
    // Add other product data here
  },
  {
    id: 9,
    brand: "adidas",
    name: "White coton shirt",
    price: 50,
    instock: 10,
    image: "/img/products/n3.jpg",
    // Add other product data here
  },
  {
    id: 10,
    brand: "adidas",
    name: "Navy Motive shirt",
    price: 66,
    instock: 10,
    image: "/img/products/n4.jpg",
    // Add other product data here
  },
  {
    id: 11,
    brand: "adidas",
    name: "Jeans Casual Shirt",
    price: 66,
    instock: 10,
    image: "/img/products/n5.jpg",
    // Add other product data here
  },
  {
    id: 12,
    brand: "adidas",
    name: "Short serious pant",
    price: 80,
    instock: 10,
    image: "/img/products/n6.jpg",
    // Add other product data here
  },
  {
    id: 13,
    brand: "adidas",
    name: "Black Everyday shirt",
    price: 75,
    instock: 10,
    image: "/img/products/n7.jpg",
    // Add other product data here
  },
  {
    id: 14,
    brand: "adidas",
    name: "Bandage Bow Shirring Blouse",
    price: 55,
    instock: 10,
    image: "/img/products/n8.jpg",
    // Add other product data here
  },
  {
    id: 15,
    brand: "OVS",
    name: "Long Velvet white skirt",
    price: 88,
    instock: 15,
    image: "/img/products/f2.3.png",
    // Add other product data here
  },
  {
    id: 16,
    brand: "OVS",
    name: "Long Coton Gray Skirt",
    price: 66,
    instock: 15,
    image: "/img/products/f4.3.png",
    // Add other product data here
  },
  {
    id: 17,
    brand: "OVS",
    name: "Long velvet White Skirt",
    price: 70,
    instock: 15,
    image: "/img/products/f1.2.png",
    // Add other product data here
  },
  {
    id: 18,
    brand: "OVS",
    name: "Long Polka Dot Pleated Skirt",
    price: 76,
    instock: 15,
    image: "/img/products/f3.3.png",
    // Add other product data here
  },
  {
    id: 19,
    brand: "OVS",
    name: "Long Coton White Pants",
    price: 90,
    instock: 15,
    image: "/img/products/n2.3.png",
    // Add other product data here
  },
  {
    id: 20,
    brand: "OVS",
    name: "Smile Loose T-shirt",
    price: 50,
    instock: 15,
    image: "/img/products/f6.2.png",
    // Add other product data here
  },

  // Add more products here...
];

function renderProducts(productsData) {
  productEl.innerHTML = "";
  productsData.forEach((product) => {
    productEl.innerHTML += `
      <div class="pro">
          <img src="${product.image}" alt="" />
          <div class="des">
            <span>${product.brand}</span>
            <h5>${product.name}</h5>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>$${product.price}</h4>
          </div>
          <a class="cart" onclick="addToCart(${product.id})" href="javascript:void(0)"><i  class="fa-solid fa-cart-shopping"></i></a>
        </div>
      `;
  });
}
const productsPerPage = 12;
renderProductsPage(1, productsItems);

const totalPages = Math.ceil(productsItems.length / productsPerPage);

function renderProductsPage(pageNumber) {
  const startIndex = (pageNumber - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = productsItems.slice(startIndex, endIndex);

  renderProducts(productsToDisplay);
}

for (let page = 0; page < totalPages; page++) {
  paginationink[page].addEventListener("click", (event) => {
    event.preventDefault();
    renderProductsPage(page + 1, productsItems);
  });
}

// Call the function to render cart items when the page loads

// Call the function to render cart items when the page loads

////////////////////////////////////////////////////////////

//CHOOSE BETWIN PRODUCTS //
document.addEventListener("DOMContentLoaded", function () {
  let MainImg = document.getElementById("MainImg");
  let smallImg = document.getElementsByClassName("small-img");

  //if you click the small image we create a function that set the Main image to be the image that we have clicked
  smallImg[0].onclick = function () {
    MainImg.src = smallImg[0].src;
  };

  smallImg[1].onclick = function () {
    MainImg.src = smallImg[1].src;
  };
  smallImg[2].onclick = function () {
    MainImg.src = smallImg[2].src;
  };
  smallImg[3].onclick = function () {
    MainImg.src = smallImg[3].src;
  };
});

//CHECKOUT MODAL

document.addEventListener("DOMContentLoaded", function () {
  const backdrop = document.getElementById("backdrop");
  const modal = document.querySelector(".modal");
  const openModalBtn = document.getElementById("open-modal");

  function showBackdrop() {
    backdrop.classList.toggle("visible");
  }

  function showModal() {
    modal.classList.toggle("visible");
  }

  openModalBtn.addEventListener("click", () => {
    showBackdrop();
    showModal();
  });
});

///get the email from the news letter
document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("emailInput");
  const signUpButton = document.querySelector(".signUp");

  signUpButton.addEventListener("click", function () {
    const email = emailInput.value;

    // Store the email in local storage
    localStorage.setItem("newsletterEmail", email);

    // Notify the user (this is a simplified example)
    alert("You have successfully signed up for our newsletter!");

    // Clear the email input
    emailInput.value = "";
  });
});
