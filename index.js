const maxFloat = 0.99999999999999;
const minFloat = 0.00000000000001;
const maxSeed = 1000;
const minSeed = 0;

class Weapon {
    constructor(name, rarity, float, condition, seed, statTrak){
        this.name = name;
        this.rarity = rarity;
        this.float = float;
        this.condition = condition;
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
        if (this.float > 0 && this.float <= 0.07){
            this.condition = "Factory New";
        } else if(this.float > 0.07 && this.float <= 0.15){
            this.condition = "Minimal Wear";
        } else if(this.float > 0.15 && this.float <= 0.38){
            this.condition = "Field-Tested";
        } else if(this.float > 0.38 && this.float <= 0.45){
            this.condition = "Well-Worn"
        } else {
            this.condition = "Battle-Scarred";
        }
    }

}

class Case{
    constructor(caseName, caseWeapons, rarityOdds, statTrakOdds){
        this.caseName = caseName;
        this.caseWeapons = caseWeapons;
        this.rarityOdds = rarityOdds;
        this.statTrakOdds = statTrakOdds;
    }
}

class WeaponCase extends Case{
    constructor(caseName = "CS:GO Weapon Case",
                caseWeapons = ["AWP | Lightning Strike", "AK-47 | Case Hardened", "Desert Eagle | Hypotic",
                             "Glock-18 | Dragon Tatto", "USP-S | Dark Water", "M4A1-S | Dark Water",
                             "SG 553 | Ultraviolet", "MP7 | Skulls", "AUG | Wings"], 
                rarityOdds = {"Mil-Spec Grade"   : 0.7992,
                              "Restricted"       : 0.1598,
                              "Classified"       : 0.0320,
                              "Exceedingly Rare" : 0.0026
                            },
                statTrakOdds = 0.1,
    
    ){
        super(caseName, caseWeapons, rarityOdds, statTrakOdds);
    }

}
