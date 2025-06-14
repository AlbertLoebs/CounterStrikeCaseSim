const maxFloat = 0.99999999999999;
const minFloat = 0.00000000000001;
const maxSeed = 1000;
const minSeed = 0;
const rarityOdds = {"Mil-Spec Grade"   : 0.7992,
                    "Restricted"       : 0.1598,
                    "Classified"       : 0.0320,
                    "Exceedingly Rare" : 0.0026
                    };
const statTrakOdds = 0.1;

const allKnifes = [
    "Karambit",
    "Bayonet",
    "Gut Knife",
    "Flip Knife",
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
                     "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"]
    }
}

class Weapon {
    constructor(name, rarity, float, condition, seed, statTrak){
        this.name = name;
        this.rarity = rarity;
        this.float = float;
        this.condition = setCondition();
        this.seed = seed;
        this.statTrak = statTrak;
    }

    //setName

    setFloat(){
        this.float = Math.random() * (maxFloat - minFloat) + minFloat;
    }

    setSeed(){
        this.seed = Math.random() * (maxSeed - minSeed) + minSeed;
    }

    setCondition(){
        if (this.float <= 0.07) return "Factory New";
        if (this.float <= 0.15) return "Minimal Wear";
        if (this.float <= 0.38) return "Field-Tested";
        if (this.float <= 0.45) return "Well-Worn";
        return "Battle-Scarred";
    }

}

class Case{
    constructor(caseName, caseWeapons, rarityOdds, statTrakOdds){
        this.caseName = caseName;
        this.caseWeapons = caseWeapons;
        this.rarityOdds = {   "Mil-Spec Grade"   : 0.7992,
                              "Restricted"       : 0.1598,
                              "Classified"       : 0.0320,
                              "Exceedingly Rare" : 0.0026
                            };
        this.statTrakOdds = 0.1;
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
            "Exceedingly Rare": [

            ]
        });
    }
}