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
