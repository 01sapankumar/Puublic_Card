const productData = [
  {
    color: "#e74c3c", // red
    image: "https://plus.unsplash.com/premium_photo-1689327920821-bbeebd80f6ce?w=600&auto=format&fit=crop&q=60",
    price: "₹ 999"
  },
  {
    color: "#3498db", // blue
    image: "https://images.unsplash.com/photo-1696086152513-c74dc1d4b135?w=600&auto=format&fit=crop&q=60",
    price: "₹ 1049"
  },
  {
    color: "#2ecc71", // green
    image: "https://plus.unsplash.com/premium_photo-1727942419701-0428352a21e1?w=600&auto=format&fit=crop&q=60",
    price: "₹ 1099"
  }
];

const imageEl = document.getElementById("product-image");
const priceEl = document.getElementById("product-price");
const swatchesContainer = document.querySelector(".swatches");

function renderProduct(index) {
  const { image, price } = productData[index];
  imageEl.style.opacity = 0;
  setTimeout(() => {
    imageEl.src = image;
    priceEl.textContent = price;
    imageEl.style.opacity = 1;
  }, 200);
  updateSwatchSelection(index);
}

function updateSwatchSelection(activeIndex) {
  const buttons = document.querySelectorAll(".swatches button");
  buttons.forEach((btn, index) => {
    btn.setAttribute("aria-checked", index === activeIndex);
  });
}

function init() {
  productData.forEach((product, index) => {
    const btn = document.createElement("button");
    btn.style.backgroundColor = product.color;
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", index === 0);
    btn.setAttribute("aria-label", product.color);
    btn.addEventListener("click", () => renderProduct(index));
    swatchesContainer.appendChild(btn);
  });
  renderProduct(0);
}

document.addEventListener("DOMContentLoaded", init);
