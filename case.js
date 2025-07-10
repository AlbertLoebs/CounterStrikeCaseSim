//import { MAX_FLOAT, MIN_FLOAT, MAX_SEED, MIN_SEED } from './weapon.js';

export const RARITY_ODDS = {
  "Mil-Spec Grade": 0.7992,
  "Restricted": 0.1598,
  "Classified": 0.0320,
  "Covert": 0.0064,
  "Exceedingly Rare": 0.0026
};

export const STATTRAK_ODDS = 0.1;

export const allKnifes = [
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
];

const knifePool = {
  "CS:GO Weapon Case": {
    "Bayonet": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Karambit": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Gut Knife": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "M9 Bayonet": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Flip Knife": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
  },

  "eSports 2013 Case": {
    "Bayonet": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Karambit": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Gut Knife": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "M9 Bayonet": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Flip Knife": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
  },

  "Operation Bravo Case": {
    "Bayonet": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Karambit": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Gut Knife": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "M9 Bayonet": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Flip Knife": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
  },

  "CS:GO Weapon Case 2": {
    "Bayonet": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Karambit": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Gut Knife": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "M9 Bayonet": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Flip Knife": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
  },

  "Winter Offensive Weapon Case": {
    "Bayonet": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Karambit": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Gut Knife": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "M9 Bayonet": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Flip Knife": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
  },

  "eSports 2013 Winter Case": {
    "Bayonet": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Karambit": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Gut Knife": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "M9 Bayonet": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
    "Flip Knife": ["Fade", "Slaughter", "Case Hardened", "★", "Crimson Web", "Blue Steel", "Night", "Stained",
      "Boreal Forest", "Urban Masked", "Scorched", "Forest DDPAT", "Safari Mesh"],
  }
};

function getKnife(caseName) {
  const knives = knifePool[caseName];
  return Object.entries(knives).flatMap(
    ([knife, finishes]) => finishes.map(finish => `${knife} | ${finish}`)
  );
}

export class Case {
  constructor(caseName, caseWeapons) {
    this.caseName = caseName;
    this.caseWeapons = caseWeapons;
    this.rarityOdds = RARITY_ODDS;
    this.statTrakOdds = STATTRAK_ODDS;
  }
}

export class WeaponCase extends Case {
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

export class eSports2013Case extends Case {
  constructor() {
    super("eSports 2013 Case", {
      "Mil-Spec Grade": [
        "M4A4 | Faded Zebra", "MAG-7 | Memento", "Famas | Doomkitty"
      ],
      "Restricted": [
        "Galil Ar | Orange DDPAT", "Sawed-Off | Orange DDPAT", "P250 | Splash"
      ],
      "Classified": [
        "AWP | Boom", "AK-47 | Red Laminate"
      ],
      "Covert": [
        "P90 | Death by kitty"
      ],
      "Exceedingly Rare": getKnife("eSports 2013 Case")
    });
  }
}

export class OperationBravoCase extends Case {
  constructor() {
    super("Operation Bravo Case", {
      "Mil-Spec Grade": [
        "Dual Berettas | Black Limba", "Nova | Tempest", "G3SG1 | Demeter", "UMP-45 | Bone Pile", "Galil AR | Shattered", "SG 553 | Wave Spray"
      ],
      "Restricted": [
        "Mac-10 | Graven", "M4A1-S | Bright Water", "M4A4 | Zirka", "USP-S | Overgrowth"
      ],
      "Classified": [
        "P2000 | Ocean Foam", "AWP | Graphite", "P90 | Emerald Dragon"
      ],
      "Covert": [
        "Desert Eagle | Golden Koi", "AK-47 | Fire Serpent"
      ],
      "Exceedingly Rare": getKnife("Operation Bravo Case")
    });
  }
}

export class weaponCase2 extends Case {
  constructor() {
    super("CS:GO Weapon Case 2", {
      "Mil-Spec Grade": [
        "FAMAS | Hexane", "Tec-9 | Blue Titanium", "M4A1-S | Blood Tiger", "P250 | Hive", "SCAR-20 | Crimson Web"
      ],
      "Restricted": [
        "MP9 | Hypnotic", "Five-SeveN | Case Hardened", "Dual Berettas | Hemoglobin", "Nova | Graphite"
      ],
      "Classified": [
        "P90 | Cold Blooded", "USP-S | Serum"
      ],
      "Covert": [
        "SSG 08 | Blood In The Water"
      ],
      "Exceedingly Rare": getKnife("CS:GO Weapon Case 2")
    });
  }
}

export class winterOffensiveWeaponCase extends Case {
  constructor() {
    super("Winter Offensive Weapon Case", {
      "Mil-Spec Grade": [
        "Five-SeveN | Kami", "Galil AR | Sandstorm", "PP-Bizon | Cobalt Halftone", "M249 | Magma"
      ],
      "Restricted": [
        "Nova | Rising Skull", "Dual Berettas | Marina", "MP9 | Rose Iron", "FAMAS | Pulse"
      ],
      "Classified": [
        "P250 | Mehndi", "M4A1-S | Guardian", "AWP | Redline"
      ],
      "Covert": [
        "M4A4 | Asiimov", "Sawed-Off | The Kraken"
      ],
      "Exceedingly Rare": getKnife("Winter Offensive Weapon Case")
    });
  }
}

export class eSports2013WinterCase extends Case {
constructor() {
    super("eSports 2013 Winter Case", {
      "Mil-Spec Grade": [
        "Five-SeveN | Nightshade", "G3SG1 | Azure Zebra", "Nova | Ghost Camo", "PP-Bizon | Water Sigil", "P250 | Steel Disruption", "Galil AR | Blue Titanium"
      ],
      "Restricted": [
        "P90 | Blind Spot", "Ak-47 | Blue Laminate"
      ],
      "Classified": [
        "FAMAS | Afterimage", "Desert Eagle | Cobalt Disruption", "AWP | Electric Hive"
      ],
      "Covert": [
        "M4A4 | X-Ray"
      ],
      "Exceedingly Rare": getKnife("eSports 2013 Winter Case")
    });
  }
}

export function getKnifeNames(caseName) {
  return getKnife(caseName);
}