export const MAX_FLOAT = 0.99999999999999;
export const MIN_FLOAT = 0.00000000000001;
export const MAX_SEED = 1000;
export const MIN_SEED = 0;

export class Weapon {
    constructor(name, rarity, float, seed, statTrak) {
        this.name = name;
        this.rarity = rarity;
        this.float = this.setFloat();
        this.seed = this.setSeed();
        this.condition = this.setCondition();
        this.statTrak = statTrak;
    }

    setFloat() {
        return this.float = Math.random() * (MAX_FLOAT - MIN_FLOAT) + MIN_FLOAT;
    }

    setSeed() {
        return this.seed = Math.floor(Math.random() * (MAX_SEED - MIN_SEED) + MIN_SEED);
    }

    setCondition() {
        if (this.float <= 0.07) return "Factory New";
        if (this.float <= 0.15) return "Minimal Wear";
        if (this.float <= 0.38) return "Field-Tested";
        if (this.float <= 0.45) return "Well-Worn";
        return "Battle-Scarred";
    }

}