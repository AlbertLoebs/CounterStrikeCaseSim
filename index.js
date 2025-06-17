const MAX_FLOAT = 0.99999999999999;
const MIN_FLOAT = 0.00000000000001;
const MAX_SEED = 1000;
const MIN_SEED = 0;
const RARITY_ODDS = {"Mil-Spec Grade"  : 0.7992,
                    "Restricted"       : 0.1598,
                    "Classified"       : 0.0320,
                    "Covert"           : 0.0064,
                    "Exceedingly Rare" : 0.0026
                    };
const STATTRAK_ODDS = 0.1;

const allKnifes = [
    "Karambit",
    "Bayonet",
    "Gut Knife",
    "M9 Bayonet",
    "Bowie Knife",
    "Shadow Daggers",
    "Falchion Knife",
    "Butterfly Knife",
    "Huntsman Knife",
    "Flip Knife",
    "Talon Knife",
    "Stiletto Knife",
    "Navaja Knife",
    "Ursus Knife",
    "Survival Knife",
    "Skeleton Knife",
    "Paracord Knife",
    "Nomad Knife",
    "Kukri Knife"
]

const knifePool = {
    "CS:GO Weapon Case" : {
        "Bayonet" : ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained", 
                     "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
        "Karambit" : ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained", 
                     "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],   
        "Gut Knife" : ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained", 
                     "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
        "M9 Bayonet" : ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained", 
                     "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
        "Flip Knife" : ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained", 
                     "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    }
}

function getKnife(caseName){
    const knives = knifePool[caseName];
    return Object.entries(knives).flatMap(
        ([knife, finishes]) => finishes.map(finish => `${knife} | ${finish}`)
    );
}

class Weapon {
    constructor(name, rarity, float, seed, statTrak){
        this.name = name;
        this.rarity = rarity;
        this.float = this.setFloat();
        this.seed = this.setSeed();
        this.condition = this.setCondition();
        this.statTrak = statTrak;
    }

    setFloat(){
        return this.float = Math.random() * (MAX_FLOAT - MIN_FLOAT) + MIN_FLOAT;
    }

    setSeed(){
        return this.seed = Math.floor(Math.random() * (MAX_SEED - MIN_SEED) + MIN_SEED);
    }

    setCondition(){
        if (this.float <= 0.07) return "Factory New";
        if (this.float <= 0.15) return "Minimal Wear";
        if (this.float <= 0.38) return "Field-Tested";
        if (this.float <= 0.45) return "Well-Worn";
        return "Battle-Scarred";
    }

}

class Case {
  constructor(caseName, caseWeapons) {
    this.caseName = caseName;
    this.caseWeapons = caseWeapons;
    this.rarityOdds = RARITY_ODDS;
    this.statTrakOdds = STATTRAK_ODDS;
  }
}

class WeaponCase extends Case {
    constructor() {
        super("CS:GO Weapon Case", {
            "Mil-Spec Grade": [
                "SG 553 | Ultraviolet", "MP7 | Skulls", "AUG | Wings"
            ],
            "Restricted": [
                "Glock-18 | Dragon Tattoo", "USP-S | Dark Water", "M4A1-S | Dark Water"
            ],
            "Classified": [
                "Desert Eagle | Hypnotic", "AK-47 | Case Hardened"
            ],
            "Covert": [
                "AWP | Lightning Strike"
            ], 
            "Exceedingly Rare": getKnife("CS:GO Weapon Case")
        });
    }
}

function openCase(caseName){

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

    const weapons = weaponCase.caseWeapons[selectedRarity];
    const randomIndex = Math.floor(Math.random() * weapons.length);
    const weaponName = weapons[randomIndex];
    const isStatTrak = Math.random() < STATTRAK_ODDS;
    const unboxedWeapon = new Weapon(weaponName, selectedRarity, null, null, isStatTrak);
    console.log(unboxedWeapon);
}

openCase("CS:GO Weapon Case");
