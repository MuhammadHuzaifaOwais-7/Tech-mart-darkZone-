document.addEventListener("DOMContentLoaded", () => {
  const orderContainer = document.getElementById("order-items");
  const orderTotal = document.getElementById("order-total");
  const budgetInput = document.getElementById("budget");
  const checkOrderBtn = document.getElementById("check-order");
  const warning = document.getElementById("warning");
  const success = document.getElementById("success");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderOrder() {
    orderContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      orderContainer.innerHTML = "<p>Your cart is empty 😢</p>";
      orderTotal.textContent = 0;
      return;
    }

    cart.forEach(item => {
      total += item.price * item.quantity;
      const div = document.createElement("div");
      div.classList.add("order-item");
      div.innerHTML = `
        <div>
          <h3>${item.name}</h3>
          <p>Rs. ${item.price} × ${item.quantity}</p>
        </div>
        <p><strong>Subtotal:</strong> Rs. ${item.price * item.quantity}</p>
      `;
      orderContainer.appendChild(div);
    });

    orderTotal.textContent = total;
  }

  function showConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }

  checkOrderBtn.addEventListener("click", () => {
    const total = parseInt(orderTotal.textContent);
    const budget = parseInt(budgetInput.value);

    if (!budget) {
      warning.textContent = "⚠️ Please enter your budget first!";
      success.textContent = "";
      return;
    }

    if (total > budget) {
      warning.textContent = "🚨 Budget Limit Exceeded! Please remove some items.";
      success.textContent = "";
    } else {
      warning.textContent = "";
      success.textContent = "🎉 Order Confirmed Successfully!";
      localStorage.removeItem("cart");
      showConfetti();
    }
  });

  renderOrder();
});
