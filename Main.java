import processing.core.PApplet;

public class Main extends PApplet {
  var characters = [[],[], [], [], [],[],[], []];
      characters[0][0] = new create_character("", "", 10, 10, 10, 10);
      for(var j = 0; j < 1; j++) {
          characters[1][j] = new create_character("", "", 10, 10, 10, 10);  
      }
      this.create_character = function(name, category, atck, dfse, agit, ment) {
          this.name = name;
          this.category = category;
          this.ofns = ofns; //Athletics (climb, force open, grapple, high jump, long jump, reposition, shove, swim, trip; disarm),
          this.dfse = dfse;
          this.sped = sped; //Acrobatics (balance, tumble through; fly maneuver, squeeze), Piloting, Stealth (conceal object, hide, sneak), Thievery (palm object, steal; disable device, pick lock)
          this.ment = ment; //Arcana (recall knowledge; borrow an arcane spell, decipher writing, identify magic, learn a spell), Computers, Crafting (recall knowledge, repair; craft, earn income, identify alchemy), Deception (create diversion, impersonate, lie; feint), Diplomacy (gather information, make impression, request), Intimidate (coerce, demoralize), Lore (recall knowledge; earn income), Medicine (first aid; disease, poison, wounds), Nature (command animal, recall knowledge; identify magic, learn a spell), Occultism (recall knowledge; decipher writing, identify magic, learn a spell), Society (recall knowledge, subsist; create forgery, decipher writing), Survival (sense direction, subsist; cover tracks, track), Religion (recall knowledge; decipher writing, identify magic, learn a spell), Society (recall knowledge, subsist; create forgery), Survival (sense direction, subsist; cover tracks, track), Religion (recall knowledge; decipher writing, identify magic, learn a spell)
          this.crouching = false;
          this.x = 0;
          this.y = 0;
          this.z = 0;
          this.dX = 0;
          this.dY = 0;
          this.dZ = 0;
          push();
          translate(this.x, this.y, this.z);
          this.solid = box(size/2, size/2, size*1.5); //grass or water
          this.damage = function(stat, target, ranged) {
              accuracystat = getModOfStat(stat);
              dexpenalty = 0;
              crouch_mod = 0;
              if(this.crouching) {
                crouch_mod = 2;
              }         
              if((this.sped+this.ment)>=(this.ofns*2)) {
                if((this.ment>target.ment) && (this.sped>target.ment)) {
                  dexpenalty = target.sped;
                }
              } else {
                if(this.ofns>target.ment) {
                  dexpenalty = target.sped;
                }
              }
              if(!ranged) {
                  if(getDist(this.x, this.y, this.z, target.x, target.y, target.z) <= size*1.5) {
                      if(accuracystat >= (getModOfStat(target.sped)-dexpenalty-crouch_mod)) {
                          if(accuracystat >= getModOfStat(target.dfse)) {
                              characters = splice([indexOf(target), 1]
                          }
                      }
                  }
              } else {
                  if(getDist(this.x, this.y, this.z, target.x, target.y, target.z) <= size*6) {
                      if(accuracystat >= (getModOfStat(target.sped)-dexpenalty+crouch_mod)) {
                          if(accuracystat >= getModOfStat(target.dfse)) {
                              characters = splice([indexOf(target), 1]
                          }
                      }
                  }
              }
          }
          
          this.update = function() {
              this.x += this.dX;
              this.y += this.dY;
              this.z += this.dZ;
              translate(this.x, this.y, this.z);
              this.solid = box(size/2, size/2, size*1.5); /
          }       
          getModOfStat(stat) {
              return Math.floor((stat-10)/2);
          }
          getDist(x, y, z, xb, yb, zb) {
              return Math.sqrt(((x-xb)^2)+((y-yb)^2)+((z-zb)^2))
          }
      }
  public void settings() {
		size(500, 500);
	}

	public void draw(){
		background(64);
		//ellipse(mouseX, mouseY, 20, 20);
	}
  
	public static void main(String[] passedArgs) {
		String[] appletArgs = new String[] { "Tabletop Science-Fiction Roleplaying Game Simulator" };
		Main.main(appletArgs);
  }
}
