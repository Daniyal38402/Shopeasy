const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

  document.addEventListener("DOMContentLoaded", function () {
  const addToCartBtn = document.querySelector("button");
  const quantityInput = document.getElementById("qty");

  addToCartBtn.addEventListener("click", function () {
    const qty = parseInt(quantityInput.value);
    const productName = document.querySelector("h1").innerText;
    const productPrice = document.querySelector(".price").innerText;

    // For now, just log to console
    console.log("Added to Cart:");
    console.log("Product:", productName);
    console.log("Price:", productPrice);
    console.log("Quantity:", qty);

    alert(`${productName} (${qty} pcs) added to cart!`);
  });
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push({ name: productName, price: productPrice, quantity: qty });
localStorage.setItem("cart", JSON.stringify(cart));

// Function to update subtotal and total
function updateCartTotal() {
  const items = document.querySelectorAll('.cart-item');
  let subtotal = 0;

  items.forEach(item => {
    const price = parseFloat(item.dataset.price);
    const qty = parseInt(item.querySelector('.qty').value);
    subtotal += price * qty;
  });

  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`;
}

// Quantity change event
document.querySelectorAll('.qty').forEach(input => {
  input.addEventListener('change', () => {
    if (input.value < 1) input.value = 1;
    updateCartTotal();
  });
});

// Remove button event
document.querySelectorAll('.remove-btn').forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.remove();
    updateCartTotal();
  });
});

// Initial total update
updateCartTotal();

  document.querySelector(".edit-btn").addEventListener("click", function () {
    const newName = prompt("Enter your new name:");
    const newEmail = prompt("Enter your new email:");
    const newPhone = prompt("Enter your new phone number:");
    const newLocation = prompt("Enter your new location:");

    if (newName) document.querySelector(".profile-info h2").textContent = newName;
    if (newEmail) document.querySelector(".profile-info p:nth-child(2)").innerHTML = `<strong>Email:</strong> ${newEmail}`;
    if (newPhone) document.querySelector(".profile-info p:nth-child(3)").innerHTML = `<strong>Phone:</strong> ${newPhone}`;
    if (newLocation) document.querySelector(".profile-info p:nth-child(4)").innerHTML = `<strong>Location:</strong> ${newLocation}`;

    alert("Profile updated successfully!");
  });

  document.querySelector('a[href="#"]:nth-child(1)').addEventListener("click", function () {
    alert("You have no recent orders.");
  });

  document.querySelector('a[href="#"]:nth-child(2)').addEventListener("click", function () {
    alert("Your saved items list is empty.");
  });

  document.querySelector('a[href="#"]:nth-child(3)').addEventListener("click", function () {
    const oldPass = prompt("Enter your old password:");
    const newPass = prompt("Enter your new password:");
    if (oldPass && newPass) {
      alert("Password changed successfully!");
    } else {
      alert("Password change cancelled.");
    }
  });

  document.querySelector('a[href="#"]:nth-child(4)').addEventListener("click", function () {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      alert("Logged out successfully.");
      // window.location.href = "login.html"; // uncomment this to redirect to login page
    }
  });

  // Sample user data (normally this would come from a database or API)
const userData = {
  name: "Rana Daniyal",
  email: "rana@example.com",
  address: "Lahore, Pakistan",
  phone: "+92-300-1234567",
  orders: ["Order #1234 - Leather Jacket", "Order #1235 - Sneakers"],
  savedItems: ["Black Hoodie", "White Sneakers"]
};

// Simulated order data (from backend)
const orders = [
  {
    id: "12345",
    date: "2025-06-15",
    productImage: "img/classical leather jacket.jfif",
    productName: "Classic Leather Jacket",
    quantity: 19,
    price: "$129.99",
    status: "Delivered"
  },
  {
    id: "12346",
    date: "2025-06-10",
    productImage: "img/elegant-sunglasses.jpg",
    productName: "Elegant Sunglasses",
    quantity: 200,
    price: "$59.99 each",
    status: "Pending"
  },
  {
    id: "12347",
    date: "2025-06-10",
    productImage: "img/smart watch.jfif",
    productName: "smart watch",
    quantity: 20,
    price: "$199.99 each",
    status: "Pending"
  },
  {
    id: "12348",
    date: "2025-06-10",
    productImage: "img/Modern sneakers.jfif",
    productName: "Modern sneakers",
    quantity: 10,
    price: "$89.99 each",
    status: "Pending"
  }
];

// Inject orders into the page
const ordersList = document.getElementById("orders-list");

orders.forEach(order => {
  const orderCard = document.createElement("div");
  orderCard.className = "order-card";
  orderCard.innerHTML = `
    <div class="order-header">
      <span><strong>Order #${order.id}</strong></span>
      <span>Date: ${order.date}</span>
    </div>
    <div class="order-details">
      <div class="product">
        <img src="${order.productImage}" alt="${order.productName}">
        <div class="product-info">
          <h4>${order.productName}</h4>
          <p>Quantity: ${order.quantity}</p>
          <p>Price: ${order.price}</p>
        </div>
      </div>
      <div class="order-status">
        <p>Status: <span class="status ${order.status.toLowerCase()}">${order.status}</span></p>
      </div>
    </div>
  `;
  ordersList.appendChild(orderCard);
});

 function buyNow() {
      const order = {
        productName: "Classic Leather Jacket",
        price: "$59.99",
        orderDate: new Date().toLocaleString()
      };

      // Get existing orders or empty array
      let orders = JSON.parse(localStorage.getItem("myOrders")) || [];

      // Add new order
      orders.push(order);

      // Save back to localStorage
      localStorage.setItem("myOrders", JSON.stringify(orders));

      // Redirect to My Orders Page
      window.location.href = "my-orders.html";
    }

     const order = JSON.parse(localStorage.getItem("myOrders")) || [];
    const orderList = document.getElementById("ordersList");

    if (orders.length === 0) {
      ordersList.innerHTML = "<p>No orders yet.</p>";
    } else {
      let html = "<ul>";
      orders.forEach((order, index) => {
        html += `<li>
          <strong>Product:</strong> ${order.productName} <br>
          <strong>Price:</strong> ${order.price} <br>
          <strong>Date:</strong> ${order.orderDate}
        </li><br>`;
      });
      html += "</ul>";
      ordersList.innerHTML = html;
    }









     function validateForm() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
      }

      alert("Your message has been sent successfully!");
      return true;
    }