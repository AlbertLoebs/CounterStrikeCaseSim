import { Weapon } from './weapon.js';
import { WeaponCase, eSports2013Case, RARITY_ODDS, STATTRAK_ODDS, allKnifes, OperationBravoCase, weaponCase2, winterOffensiveWeaponCase, eSports2013WinterCase, weaponCase3, operationPhoenixWeaponCase } from './case.js';
import { saveToLocalStorage } from './inventory.js';
import { getBalance, subBalance, addBalance, updateBalanceDisplay } from './balance.js';

async function openCase(caseName) {
    let nameOfCase;

    switch (caseName) {
        case "CS:GO Weapon Case":
            nameOfCase = new WeaponCase();
            break;
        case "eSports 2013 Case":
            nameOfCase = new eSports2013Case();
            break;
        case "Operation Bravo Case":
            nameOfCase = new OperationBravoCase();
            break;
        case "CS:GO Weapon Case 2":
            nameOfCase = new weaponCase2();
            break;
        case "eSports 2013 Winter Case":
            nameOfCase = new eSports2013WinterCase();
            break;
        case "Winter Offensive Weapon Case":
            nameOfCase = new winterOffensiveWeaponCase();
            break;
        case "CS:GO Weapon Case 3":
            nameOfCase = new weaponCase3();
            break;
        case "Operation Phoenix Weapon Case":
            nameOfCase = new operationPhoenixWeaponCase();
            break;
        default:
            console.error("Unknown Case");
            return;
    }

    const weaponPool = nameOfCase.caseWeapons;

    const roll = Math.random();
    let lowerBound = 0;
    let selectedRarity = null;

    for (const [rarity, chance] of Object.entries(RARITY_ODDS)) {
        const upperBound = lowerBound + chance;
        if (roll >= lowerBound && roll < upperBound) {
            selectedRarity = rarity;
            break;
        }
        lowerBound = upperBound;
    }

    const weapons = weaponPool[selectedRarity];
    const randomIndex = Math.floor(Math.random() * weapons.length);
    const weaponName = weapons[randomIndex];
    const isStatTrak = Math.random() < STATTRAK_ODDS;

    // Determine if this is a knife
    const isKnife = allKnifes.some(knife => weaponName.includes(knife));

    let finish = "";
    if (isKnife) {
        // Get knife key match
        const knifeKey = Object.keys(knifePool[caseName]).find(k => weaponName.includes(k));
        if (knifeKey) {
            const finishes = knifePool[caseName][knifeKey];
            const validFinishes = finishes.filter(f => f !== "★"); // exclude star
            finish = validFinishes[Math.floor(Math.random() * validFinishes.length)];
        }
    }

    // Build displayName and marketHashName
    let displayName = weaponName;
    let marketHashName = weaponName;

    if (isKnife) {
        displayName = `★ ${weaponName} | ${finish}`;
        marketHashName = displayName;

        if (isStatTrak) {
            displayName = displayName.replace("★", "StatTrak™ ★");
            marketHashName = marketHashName.replace("★", "StatTrak™ ★");
        }
    } else {
        if (isStatTrak) {
            displayName = `StatTrak™ ${weaponName}`;
            marketHashName = `StatTrak™ ${weaponName}`;
        } else {
            displayName = weaponName;
            marketHashName = weaponName;
        }
    }

    const unboxedWeapon = new Weapon(weaponName, selectedRarity, null, null, isStatTrak);
    console.log(unboxedWeapon);

    const droppedItemDiv = document.querySelector(".droppedItem");
    droppedItemDiv.textContent = `${displayName} (${unboxedWeapon.condition}) | Float: ${unboxedWeapon.float} | Seed: ${unboxedWeapon.seed}`;

    const price = await fetchPrice(marketHashName, unboxedWeapon.condition);

    if (price !== null) {
        droppedItemDiv.textContent += ` | Price: $${price}`;
    } else {
        droppedItemDiv.textContent += ` | Price: Can't find a value`;
    }
    displayItem(displayName, caseName, unboxedWeapon, price);

}

window.openCase = openCase;

async function fetchPrice(weaponName, condition) {
    const wearOrder = ["Factory New", "Minimal Wear", "Field-Tested", "Well-Worn", "Battle-Scarred"];

    function normalizeName(name) {
        return name
            .replace(/\u2122/g, "™")
            .toLowerCase();
    }

    try {
        const response = await fetch(`prices.json`);
        if (!response.ok) {
            throw new Error('Failed to fetch prices');
        }

        const data = await response.json();
        const searchItem = normalizeName(`${weaponName} (${condition})`);

        let item = data.items.find(entry => normalizeName(entry.market_hash_name) === searchItem);

        if (item) {
            const priceNumber = Number(item.price);
            return priceNumber.toFixed(2);
        } else {
            const conditionIndex = wearOrder.indexOf(condition);

            for (let offset = 1; offset < wearOrder.length; offset++) {
                let upIndex = conditionIndex - offset;
                if (upIndex >= 0) {
                    let tryCondition = wearOrder[upIndex];
                    let tryItem = data.items.find(entry =>
                        normalizeName(entry.market_hash_name) === normalizeName(`${weaponName} (${tryCondition})`)
                    );
                    if (tryItem) return Number(tryItem.price).toFixed(2);
                }

                let downIndex = conditionIndex + offset;
                if (downIndex < wearOrder.length) {
                    let tryCondition = wearOrder[downIndex];
                    let tryItem = data.items.find(entry =>
                        normalizeName(entry.market_hash_name) === normalizeName(`${weaponName} (${tryCondition})`)
                    );
                    if (tryItem) return Number(tryItem.price).toFixed(2);
                }
            }

            console.log(`Can't find a price for ${searchItem}`);
            return null;
        }
    } catch (error) {
        console.error('Error fetching price:', error);
        return null;
    }
}

function displayItem(displayName, caseName, unboxedWeapon, price) {
    console.log(displayName);

    let isKnife = allKnifes.some(knife => displayName.includes(knife));

    let weaponKey = displayName.toLowerCase()
        .replace(/^stattrak™\s*/, '')
        .replace(/\|/g, '')
        .replace(/★/g, '')
        .replace(/-/g, '')
        .replace(/\s/g, '');
    console.log(weaponKey);

    const droppedItemDiv = document.querySelector('.droppedItemImage');
    let path;

    if (isKnife) {
        path = `./knifeImages/${weaponKey}.png`;
    } else {
        switch (caseName) {
            case "CS:GO Weapon Case":
                path = `./CSGOWeaponCaseSkins/${weaponKey}.png`;
                break;
            case "eSports 2013 Case":
                path = `./eSports2013CaseSkins/${weaponKey}.png`;
                break;
            case "Operation Bravo Case":
                path = `./operationBravoCaseSkins/${weaponKey}.png`;
                break;
            case "CS:GO Weapon Case 2":
                path = `./CSGOWeaponCaseSkins2/${weaponKey}.png`;
                break;
            case "eSports 2013 Winter Case":
                path = `./eSports2013WinterCaseSkins/${weaponKey}.png`;
                break;
            case "Winter Offensive Weapon Case":
                path = `./winterOffensiveWeaponCaseSkins/${weaponKey}.png`;
                break;
            case "CS:GO Weapon Case 3" :
                path = `./CSGOWeaponCaseSkins3/${weaponKey}.png`;
                break;
            case "Operation Phoenix Weapon Case" :
                path = `./OperationPhoenixWeaponCaseSkins/${weaponKey}.png`;
                break;
            default:
                console.error("Unknown case");
                return;
        }
    }


    droppedItemDiv.innerHTML = `<img src="${path}" alt="${weaponKey}">`;

    const itemToSave = {
        name: displayName,
        condition: unboxedWeapon.condition,
        float: unboxedWeapon.float,
        seed: unboxedWeapon.seed,
        price: price ?? "N/A",
        imagePath: path
    };

    saveToLocalStorage(itemToSave);
}

function updateCardCount(caseName, countElem) {
  if (!countElem) return;
  const count = getCaseCount(caseName);
  countElem.textContent = `x${count}`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".case-card").forEach(async card => {
    const caseName = card.dataset.case;
    const buyBtn = card.querySelector(".buyBtn");
    const openBtn = card.querySelector(".openBtn");
    const countDisplay = card.querySelector(".case-count");
    const priceDisplay = card.querySelector(".case-price");

    if (!buyBtn || !openBtn || !countDisplay) return;

    updateCardCount(caseName, countDisplay);

    const casePriceString = await fetchCasePrice(caseName);
    if (casePriceString){
        priceDisplay.textContent = `$${casePriceString}`;
    } else {
        priceDisplay.textContent = "Price unavailable";
    }

    buyBtn.addEventListener("click", async () => {
      const casePriceStr = await fetchCasePrice(caseName);
      if (!casePriceStr) {
        alert("Case price unavailable.");
        return;
      }
      const casePrice = Number(casePriceStr);
      const balance = getBalance();

      if (balance >= casePrice) {
        subBalance(casePrice);
        addCaseToInventory(caseName);
        updateCardCount(caseName, countDisplay);
        updateBalanceDisplay();
      } else {
        alert("Not enough money to buy this case.");
      }
    });

    openBtn.addEventListener("click", async () => {
      const owned = getCaseCount(caseName);
      const balance = getBalance();

      if (owned < 1) {
        alert("You don't own this case.");
        return;
      }
      if (balance < 2.50) {
        alert("Not enough balance for the key.");
        return;
      }

      subBalance(2.50);
      removeCaseFromInventory(caseName);
      updateCardCount(caseName, countDisplay);
      updateBalanceDisplay();
      await openCase(caseName);
    });
  });
    getMoney();
});

function getCaseCount(caseName) {
  const inv = JSON.parse(localStorage.getItem("caseInventory")) || {};
  return inv[caseName] || 0;
}

function addCaseToInventory(caseName) {
  const inv = JSON.parse(localStorage.getItem("caseInventory")) || {};
  inv[caseName] = (inv[caseName] || 0) + 1;
  localStorage.setItem("caseInventory", JSON.stringify(inv));
}

function removeCaseFromInventory(caseName) {
  const inv = JSON.parse(localStorage.getItem("caseInventory")) || {};
  if (inv[caseName]) {
    inv[caseName]--;
    if (inv[caseName] <= 0) delete inv[caseName];
    localStorage.setItem("caseInventory", JSON.stringify(inv));
  }
}

async function fetchCasePrice(caseName) {
    function normalizeName(name) {
        return name.toLowerCase().trim();
    }

    try {
        const response = await fetch('prices.json');
        if (!response.ok) {
            throw new Error('Failed to fetch case prices');
        }
        const data = await response.json();

        const normalizedCaseName = normalizeName(caseName);

        const item = data.items.find(entry =>
            normalizeName(entry.market_hash_name) === normalizedCaseName
        );

        if (item) {
            const priceNumber = Number(item.price);
            return priceNumber.toFixed(2);
        } else {
            console.warn(`Price not found for case: ${caseName}`);
            return null;
        }
    } catch (error) {
        console.error('Error fetching case price:', error);
        return null;
    }
}

function getMoney() {
    const moneyBtn = document.getElementById("moneyBtn");

    if (moneyBtn) {
        moneyBtn.addEventListener("click", () => {
            addBalance(10);
            updateBalanceDisplay();
        });
    }
}