import { Weapon } from './weapon.js';
import { WeaponCase, RARITY_ODDS, STATTRAK_ODDS } from './case.js';

async function openCase(caseName) {
    const weaponCase = new WeaponCase();
    const weaponPool = weaponCase.caseWeapons;

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
    const unboxedWeapon = new Weapon(weaponName, selectedRarity, null, null, isStatTrak);

    console.log(unboxedWeapon);

    const droppedItemDiv = document.querySelector(".droppedItem");
    const prefix = unboxedWeapon.statTrak ? "StatTrak\u2122 " : "";
    droppedItemDiv.textContent = `${prefix}${unboxedWeapon.name} (${unboxedWeapon.condition}) | Float: ${unboxedWeapon.float.toFixed(4)} | Seed: ${unboxedWeapon.seed}`;

    const price = await fetchPrice(unboxedWeapon.name, unboxedWeapon.condition);

    if (price !== null) {
        droppedItemDiv.textContent += ` | Price: $${price}`;
    } else {
        droppedItemDiv.textContent += ` | Price: Can't find a value`;
    }

}

window.openCase = openCase;
fetchPrice(unboxedWeapon.name, unboxedWeapon.condition);

async function fetchPrice(weaponName, condition) {
    try {
        const response = await fetch(`prices.json`)

        if (!response.ok) {
            throw new Error(error)
        }

        const data = await response.json();

        const searchItem = `${weaponName} (${condition})`;
        const item = data.items.find(entry => entry.market_hash_name === searchItem);

        if (item) {
            return item.price;
        } else {
            console.log(`Can't find a price for ${weaponName} ${condition}`);
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}
