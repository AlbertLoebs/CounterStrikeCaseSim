import { updateBalanceDisplay, addBalance } from './balance.js';
let inventory = [];

export function saveToLocalStorage(item) {
    inventory = JSON.parse(localStorage.getItem("inventory")) || [];
    inventory.unshift(item);  // makes newest at the top
    localStorage.setItem("inventory", JSON.stringify(inventory));
}

function loadInventory() {
    inventory = JSON.parse(localStorage.getItem("inventory")) || [];

    const container = document.querySelector("#inventoryContainer");
    if (!container) {
        console.error("Inventory container not found in DOM");
        return;
    }
    container.innerHTML = "";

    if (inventory.length === 0) {
        container.textContent = "Your inventory is empty";
        return;
    }

    inventory.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("inventoryItem");

        const img = document.createElement("img");
        img.src = item.imagePath;
        img.alt = item.name;

        const info = document.createElement("p");
        info.textContent = `${item.name} (${item.condition}) | Float: ${item.float.toFixed(4)} | Seed: ${item.seed} | $${item.price}`;

        const sellBtn = document.createElement("button");
        sellBtn.textContent = "Sell";
        sellBtn.classList.add("sellButton");

        sellBtn.addEventListener("click", () => sellSkin(index));


        itemDiv.appendChild(img);
        itemDiv.appendChild(info);
        itemDiv.appendChild(sellBtn);
        container.appendChild(itemDiv);
    });

    updateTotalPrice();  // update total price when loading
}

function updateTotalPrice() {
    const totalPriceElem = document.querySelector("#totalPrice");
    if (!totalPriceElem) {
        console.error("Total price element not found in DOM");
        return;
    }

    let total = 0;
    inventory.forEach(item => {
        const price = parseFloat(item.price);
        if (!isNaN(price)) {
            total += price;
        }
    });

    totalPriceElem.textContent = `Inventory Value: $${total.toFixed(2)}`;
}

function sellSkin(index) {
    let inventory = JSON.parse(localStorage.getItem("inventory")) || [];
    const item = inventory[index];
    if (!item) return;

    addBalance(parseFloat(item.price)); // Adds price to userBalance and updates display

    // Remove skin from inventory
    inventory.splice(index, 1);
    localStorage.setItem("inventory", JSON.stringify(inventory));

    loadInventory();       // refresh inventory UI
    updateTotalPrice();
}

window.addEventListener('DOMContentLoaded', () => {
    loadInventory();
    updateTotalPrice();
});