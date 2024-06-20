<?php
$servername = "localhost";
$username = "username";
$password = "password";

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
    if(getDist(this.x, this.y, this.z, target.x, target.y, target.z) <= size*1.5) {
      if((accuracystat-crouch_mod+frightened_mod+10) >= (getModOfStat(target.sped)-dexpenalty+t_crouch_mod)) {
        if(((accuracystat*2)+frightened_mod) >= getModOfStat(target.dfse)) {
          characters = splice([indexOf(target), 1];
        }
      } else {
        if(((accuracystat-cover_mod)+frightened_mod) >= (getModOfStat(target.sped)-dexpenalty+t_crouch_mod)) {
          if((accuracystat+frightened_mod) >= getModOfStat(target.dfse)) {
            characters = splice([indexOf(target), 1];
          }
        }
      }
    }
  } else if(getDist(this.x, this.y, this.z, target.x, target.y, target.z) <= size*6) {
    if((accuracystat-crouch_mod+frightened_mod+10) >= (getModOfStat(target.sped)-dexpenalty+(t_crouch_mod*-1))) {
        if(((accuracystat*2)+frightened_mod) >= getModOfStat(target.dfse)) {
          characters = splice([indexOf(target), 1];
        }
      } else {
        if((accuracystat-+frightened_modcover_mod) >= (getModOfStat(target.sped)-dexpenalty+(t_crouch_mod*-1))) {
          if((accuracystat+frightened_mod) >= getModOfStat(target.dfse)) {
            characters = splice([indexOf(target), 1];
          }
        }
      }
    }
  }
}

function update() {
  this.x += this.dX;
  this.y += this.dY;
  this.z += this.dZ;
  translate(this.x, this.y, this.z);
  this.solid = box(size/2, size/2, size*1.5); /
}       
function getModOfStat(stat) {
  return Math.floor((stat-10)/2);
}
function getDist(x, y, z, xb, yb, zb) {
  return Math.sqrt(((x-xb)^2)+((y-yb)^2)+((z-zb)^2))
}

try {
  $conn = new PDO("mysql:host=$servername;dbname=game", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>
