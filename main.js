import { Weapon } from './weapon.js';
import { WeaponCase, eSports2013Case, RARITY_ODDS, STATTRAK_ODDS, allKnifes } from './case.js';

async function openCase(caseName) {
    let nameOfCase;

    switch (caseName) {
        case `CS:GO Weapon Case`:
            nameOfCase = new WeaponCase();
            break;
        case `eSports 2013 Case`:
            nameOfCase = new eSports2013Case();
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

    // Handle StatTrak naming properly for knives
    const isKnife = allKnifes.some(knife => weaponName.includes(knife));
    let displayName = weaponName;
    let marketHashName = weaponName;

    if (isStatTrak) {
        if (isKnife) {
            // For knives, StatTrak comes before the ★
            displayName = weaponName.includes('★')
                ? weaponName.replace('★', 'StatTrak™ ★')
                : `StatTrak™ ${weaponName}`;
            marketHashName = weaponName.includes('★')
                ? weaponName.replace('★', 'StatTrak™ ★')
                : `StatTrak™ ${weaponName}`;
        } else {
            // For regular weapons, StatTrak is just a prefix
            displayName = `StatTrak™ ${weaponName}`;
            marketHashName = `StatTrak™ ${weaponName}`;
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
    displayItem(unboxedWeapon.name, caseName);

}

window.openCase = openCase;

async function fetchPrice(weaponName, condition) {
    const wearOrder = ["Factory New", "Minimal Wear", "Field-Tested", "Well-Worn", "Battle-Scarred"];

    try {
        const response = await fetch(`prices.json`);
        if (!response.ok) {
            throw new Error('Failed to fetch prices');
        }

        const data = await response.json();
        const searchItem = `${weaponName} (${condition})`;

        let item = data.items.find(entry => entry.market_hash_name === searchItem);


        if (item) {
            const priceNumber = Number(item.price);
            return priceNumber.toFixed(2);
        } else {
            const conditionIndex = wearOrder.indexOf(condition);

            for (let offset = 1; offset < wearOrder.length; offset++) {
                let upIndex = conditionIndex - offset;
                // check above current
                if (upIndex >= 0) {
                    let tryCondition = wearOrder[upIndex];
                    let tryItem = data.items.find(entry => entry.market_hash_name === `${weaponName} (${tryCondition})`);
                    if (tryItem) return Number(tryItem.price).toFixed(2);
                }

                // check below current
                let downIndex = conditionIndex + offset;
                if (downIndex < wearOrder.length) {
                    let tryCondition = wearOrder[downIndex];
                    let tryItem = data.items.find(entry => entry.market_hash_name === `${weaponName} (${tryCondition})`);
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

function displayItem(weaponName, caseName) {
    console.log(weaponName);
    weaponName = weaponName.toLowerCase();
    weaponName = weaponName.replace("|", "");
    weaponName = weaponName.replace("-", "");
    weaponName = weaponName.replace(/\s/g, "");

    const droppedItemDiv = document.querySelector('.droppedItemImage');
    let path;

    switch (caseName) {
        case "CS:GO Weapon Case":
            path = `./CSGOWeaponCaseSkins/${weaponName}.png`;
            break;
        case "eSports 2013 Case":
            path = `./eSports2013CaseSkins/${weaponName}.png`;
            break;
        default:
            console.error("Unknown case");
            return;
    }


    droppedItemDiv.innerHTML = `<img src="${path}" alt="${weaponName}">`;

    console.log(weaponName);

}
