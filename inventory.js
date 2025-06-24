let inventory = [];

export function saveToLocalStorage(item) {
    inventory = JSON.parse(localStorage.getItem("inventory")) || [];
    inventory.unshift(item);  // makes newest at the top
    localStorage.setItem("inventory", JSON.stringify(inventory));
}

function loadInventory() {
    const inventory = JSON.parse(localStorage.getItem("inventory")) || [];

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

    inventory.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("inventoryItem");

        const img = document.createElement("img");
        img.src = item.imagePath;
        img.alt = item.name;

        const info = document.createElement("p");
        info.textContent = `${item.name} (${item.condition}) | Float: ${item.float.toFixed(4)} | Seed: ${item.seed} | $${item.price}`;

        itemDiv.appendChild(img);
        itemDiv.appendChild(info);

        container.appendChild(itemDiv);
    });
}

window.addEventListener('DOMContentLoaded', loadInventory);
