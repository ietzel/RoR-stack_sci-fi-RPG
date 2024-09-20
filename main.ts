
var planes = ["Material", "First World", "Shadow", "Earth", "Water", "Air", "Fire", "Ethereal", "Purgatory", "Utopia", "Heaven", "Nirvana", "Elysium", "Limbo", "Abyss", "Abaddon", "Hell", "Astral"]; 
var summaries = [
	"You prepare to take off on your journey. The Inner Sphere remains close, while the Outer Sphere remains at a distance.",
	"Bound to have wierd things. It is a portal for the Inner Sphere, and esoteric from the Outer Sphere.",
	"A great castle looms. The most evil of the Inner Sphere, though is not as evil as the Outer Sphere.",
	"Earth. Inner Sphere, Outer Sphere.",
	"Water. Inner Sphere, Outer Sphere.",
	"Air. Inner Sphere, Outer Sphere.",
	"Fire. Inner Sphere, Outer Sphere.",
	"Ethereal. Inner Sphere, Outer Sphere.",
	"Purgatory. Inner Sphere, Outer Sphere.",
	"Utopia. Inner Sphere, Outer Sphere.",
	"Heaven. Inner Sphere, Outer Sphere.",
	"Nirvana. Inner Sphere, Outer Sphere.",
	"Elysium. Inner Sphere, Outer Sphere.",
	"Limbo. Inner Sphere, Outer Sphere.",
	"Abyss. Inner Sphere, Outer Sphere.",
	"Abbadon. Inner Sphere, Outer Sphere.",
	"Hell. Inner Sphere, Outer Sphere.",
	"Astral. Inner Sphere, Outer Sphere.",
];
var organisms = [
	new organism("Player", 10, 10, 10, 10),
	new organism("", , , , ),
	new organism("", , , , ),
	new organism("Eremite Kyton", 30, 27, 30, 25),
	new organism("", , , , ),
	new organism("Advanced Giant Kraken", 42, 12, 33, 24),
	new organism("", , , , ),
	new organism("", , , , ),
	new organism("", , , , ),
	new organism("", , , , ),
	new organism("Yamaraj Psychopomp", 28, 35, 27, 27),
	new organism("", , , , ),
	new organism("", , , , ),
	new organism("", , , , ),
	new organism("", , , , ),
	new organism("Izfiitar Protean", 29, 31, 28, 25),
	new organism("Balor Demon", 35, 25, 36, 25),
	new organism("Olethrodaemon", 35, 26, 37, 21),
	new organism("Pit Fiend", 37, 30, 35, 27),
	new organism("Pleroma Aeon", 24, 27, 26, 25),
];
var industries = [
  [new industry("Financial Intermediation", "", ""), new industry("Mining", "", ""), new industry("Community, Social and Personal Service Activities & Tourism", "", "")] 
  [new industry("Wholesale & Retail Trade", "", ""), new industry("Retail Estate & Renting & Hotels & Restaurants", "", ""), new industry("Business Activities", "", "")]
  [new industry("Telecommunications", "", ""), new industry("Manufacturing", "", ""), new industry("Transport, Post & Storage", "", "")]        
];
class organism {
  constructor(name, offense, agility, defense, mental) {
    this.name = name;
    this.offense = offense;
    this.agility = agility;
    this.defense = defense;
    this.mental = mental;
    calculate_level();
  }
  calculate_level() {
    this.level = Math.floor(((this.name, this.offense, this.agility, this.defense, this.mental)-40)/16);
  }
}
class industry {
  constructor(name, qA, qB) {
    this.name = name;
    this.qA = qA;
    this.qB = qB;
  }
}
function encounter() {
  alert("Encounter: ", summaries[document.getElementById("travel").selectedIndex], organisms[document.getElementById("travel").selectedIndex]);
}
function damage(stat, mental, target, ranged) {
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

quotes = [
	"You don't even know that you're alive, 81^3#!",
	"Green number 4, close the door!",
	"You're not perfect!",
	"I-I-I-I-I want the knife.",
	"Sharks and minnows!",
	"You are not even past the phase yet.",
	"Put your hand in the gom jabbar.",
	"We're gonna drive that mother, down into your spine!",
	"And the nazgul was no more.",
	"At the end of a road was a white house.",
	"Who shall you be, the payer, or the payee?",
	"The game is predator vs prey.",
	"Where is the scroll?",
	"Just wait, until I've finished this section!",
	"Of passion accurst I have drank of a water that quenches all thirst",
	"Hell is empty and all the devils are here",
	"Chainsaw sepukku!"
	"It is a dump company.",
	"Let's say we strike a deal, not reinvent the wheel!",
	"We need to save the mentally ill.",
	"It was bait.",
	"Spinware is dark pattern.",
	"You don't have to implement the program. You do have to implement the program.",
	"Prometheus one.",
	"Bio-sadist engine.",
	"Engine of the uncontrolled.",
	"Floating white gown.",
	"Depressive marketing campaign.",
	"Very repetitive excitement.",
	"Round 2 electric boogaloo",
	"It's bad for ya.",
	"Sleep.",
	"Intelligence is disease.",
	"It shattered the kid's dreams.",
	"They just keep driving, driving, driving.",
	"Make sure it actually meets what they expect.",
	"Don't be afraid of the dark.",
	"Undead malware."
	"Goatskull floating in green mist.",
	"That was just my crazy ********: don't crap on me."
];      

    <h1><a href="https://docs.google.com/document/d/1UnQN5FBOXWiEOR3lkoWNMFROX0AjwMuNREEij2Xrdvo/edit">Campaign</a> tips for character creation</h1>
    <form id="travel">Travel:
	    <select>
		    <option>Material<option>
		    <option>First World<option>
		    <option>Shadow<option>
		    <option>Earth<option>
		    <option>Water<option>
		    <option>Air<option>
		    <option>Fire<option>
		    <option>Ethereal<option>
		    <option>Purgatory<option>
		    <option>Utopia<option>
		    <option>Heaven<option>
		    <option>Nirvana<option>
		    <option>Elysium<option>
		    <option>Limbo<option>
		    <option>Abyss<option>
		    <option>Abaddon<option>
		    <option>Hell<option>
		    <option>Astral<option>
		<select>
	<form>    
	<button onclick="encounter()">Go</button>
    <!--<form>Skill Check:
	    <select>
		    <option>Athletics (climb, force open, grapple, high jump, long jump, reposition, shove, swim, trip; disarm)</option>
		    <option>Melee/Ranged/Magic Attack</option>
		    <option> Acrobatics (balance, tumble through; fly maneuver, squeeze)</option>
		    <option>Piloting</option>
		    <option>Stealth (conceal object, hide, sneak)</option>
		    <option>Thievery (palm object, steal; disable device, pick lock)</option>
		    <option>Arcana (recall knowledge; borrow an arcane spell, decipher writing, identify magic, learn a spell)</option>
		    <option>Computers</option>
		    <option>Crafting (recall knowledge, repair; craft, earn income, identify alchemy)</option>
		    <option>Deception (create diversion, impersonate, lie; feint)</option>
		    <option>Diplomacy (gather information, make impression, request)</option>
		    <option>Intimidate (coerce, demoralize), Lore (recall knowledge; earn income)</option>
		    <option>Medicine (first aid; disease, poison, wounds)</option>
		    <option>Nature (command animal, recall knowledge; identify magic, learn a spell)</option>
		    <option>Occultism (recall knowledge; decipher writing, identify magic, learn a spell)</option>
		    <option>Survival (sense direction, subsist; cover tracks, track)</option>
		    <option>Religion (recall knowledge; decipher writing, identify magic, learn a spell)</option>
		    <option>Society (recall knowledge, subsist; create forgery)</option>
	    </select>
    </form>-->
    <table>
      <tr>
        <td>Financial Intermediation</td>
        <td>Mining</td>
        <td>Community, Social and Personal Service Activities & Tourism</td>
      </tr>
      <tr>
        <td>Wholesale & Retail Trade</td>
        <td>Retail Estate & Renting & Hotels & Restaurants</td>
        <td>Business Activities</td>
      </tr>
      <tr>
        <td>Telecommunications</td>
        <td>Manufacturing</td>
        <td>Transport, Post & Storage</td>
      </tr>
    </table>
    <h2>Setting summary:</h2>
    <p>Heavily inspired by star wars. Involves a mysterious crash landing in which the members of the ship awoke from carbonite not knowing what planet they inhabit currently or previously.</p>
    <p>The AI which they learned was controlling the ship instructed them to set up a shield until they were sufficiently settled to explore the intruiging planet.</p>
    <p>After some centuries of incubation, some members of the "city" were selected to go beyond the shield barrier to explore the world to the best of their capabilities.</p>
  </body>
</html>
