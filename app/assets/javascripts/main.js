const planes = ["Material", "First World", "Shadow", "Abyss", "Abaddon", "Hell", "Astral"]; 
const summaries = [
  "You prepare to take off on your journey. The Inner Sphere remains close, while the Outer Sphere remains at a distance.",
  "Bound to have wierd things. It is a portal for the Inner Sphere, and esoteric from the Outer Sphere.",
  "A great castle looms. The most evil of the Inner Sphere, though is not as evil as the Outer Sphere.",
  "Abyss. Inner Sphere, Outer Sphere.",
  "Abbadon. Inner Sphere, Outer Sphere.",
  "Hell. Inner Sphere, Outer Sphere."
];
var organisms = [
  new organism("Player", 10, 10, 10, 10),
  new organism("Werewolf", 20, 22, 20, 20),
  new organism("Eremite Kyton", 30, 27, 30, 25),
  new organism("Balor Demon", 35, 25, 36, 25),
  new organism("Olethrodaemon", 35, 26, 37, 21),
  new organism("Pit Fiend", 37, 30, 35, 27)
];
const industries = [
  [new industry("Financial Intermediation", "", ""), new industry("Mining", "", ""), new industry("Community, Social and Personal Service Activities & Tourism", "", "")] 
  [new industry("Wholesale & Retail Trade", "", ""), new industry("Retail Estate & Renting & Hotels & Restaurants", "", ""), new industry("Business Activities", "", "")]
  [new industry("Telecommunications", "", ""), new industry("Manufacturing", "", ""), new industry("Transport, Post & Storage", "", "")]        
];

class organism {
    name: string;
    offense: int;
    agility: int;
    defense: int;
    mental: int;
  }
}
class industry {
    name: string;
    qA: string;
    qB: string;
  }
}
function encounter(): void {
  alert("Encounter: ", summaries[document.getElementById("travel").selectedIndex], organisms[document.getElementById("travel").selectedIndex]);
  damage(organisms[0].offense, organisms[0].mental, organisms[document.getElementById("travel").selectedIndex], false);
}
function damage(stat, mental, target, ranged): void {
    accuracystat = getModOfStat(stat);
    dexpenalty = 0;
    crouch_mod = 0;
    t_crouch_mod = 0;
    t_cover_mod = 0;
    knowledgeable = false;
    frightened_mod = 0;
    if(mental >= 30) {
  knowledgeable = true;
    }
    if(target.mental<=mental) {
  frightened_mod = floor((target.mental-mental)/-10)-1;
    }
    if(this.crouching <= -1) {
  crouch_mod = -2;
    }
    if(target.crouching == -1) {
  crouch_mod = -2;
    } else if(target.crouching == -2) {
  crouch_mod = -2;
  cover_mod = -2;
    }
    if((this.sped+this.ment+frightened_mod)>=(this.ofns*2)) {
  if((this.ment>target.ment) && (this.sped>target.ment)) {
      dexpenalty = target.sped;
  }
    } else {
  if(this.ofns+frightened_mod>target.ment) {
      dexpenalty = target.sped;
  }
    }
    if(!ranged) {
  if(getDist(this.x, this.y, this.z, target.x, target.y, target.z) <= 8*1.5) {
      if((accuracystat-crouch_mod+frightened_mod+10) >= (getModOfStat(target.sped)-dexpenalty+t_crouch_mod)) {
    if(((accuracystat*2)+frightened_mod) >= getModOfStat(target.dfse)) {
        characters = splice([indexOf(target), 1]);
    }
      } else {
    if(((accuracystat-cover_mod)+frightened_mod) >= (getModOfStat(target.sped)-dexpenalty+t_crouch_mod)) {
        if((accuracystat+frightened_mod) >= getModOfStat(target.dfse)) {
      characters = splice([indexOf(target), 1]);
        }
    }
      }
  }
    } else if(getDist(this.x, this.y, this.z, target.x, target.y, target.z) <= 8*6) {
  if((accuracystat-crouch_mod+frightened_mod+10) >= (getModOfStat(target.sped)-dexpenalty+(t_crouch_mod*-1))) {
      if(((accuracystat*2)+frightened_mod) >= getModOfStat(target.dfse)) {
    characters = splice([indexOf(target), 1]);
      }
  } else {
      if((accuracystat-+frightened_modcover_mod) >= (getModOfStat(target.sped)-dexpenalty+(t_crouch_mod*-1))) {
    if((accuracystat+frightened_mod) >= getModOfStat(target.dfse)) {
        characters = splice([indexOf(target), 1]);
    }
      }
  }
    }
}
