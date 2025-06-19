//import { MAX_FLOAT, MIN_FLOAT, MAX_SEED, MIN_SEED } from './weapon.js';

export const RARITY_ODDS = {
  "Mil-Spec Grade"  : 0.7992,
  "Restricted"       : 0.1598,
  "Classified"       : 0.0320,
  "Covert"           : 0.0064,
  "Exceedingly Rare" : 0.0026
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
  },

  "eSports 2013 Case" : {
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
      "Exceedingly Rare": getKnife("CS:GO Weapon Case")
    });
  }
}


export function getKnifeNames(caseName) {
  return getKnife(caseName);
}