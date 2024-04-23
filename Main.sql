CREATE DATABASE game;

CREATE TABLE Characters (
  name TINYTEXT,
  category TINYTEXT,
  baseoffense SMALLINT(2048), --Athletics (climb, force open, grapple, high jump, long jump, reposition, shove, swim, trip; disarm),
  basedefense SMALLINT(2048), --n/a
  basespeed SMALLINT(2048), --Acrobatics (balance, tumble through; fly maneuver, squeeze), Piloting, Stealth (conceal object, hide, sneak), Thievery (palm object, steal; disable device, pick lock)
  basemental SMALLINT(2048), --Arcana (recall knowledge; borrow an arcane spell, decipher writing, identify magic, learn a spell), Computers, Crafting (recall knowledge, repair; craft, earn income, identify alchemy), Deception (create diversion, impersonate, lie; feint), Diplomacy (gather information, make impression, request), Intimidate (coerce, demoralize), Lore (recall knowledge; earn income), Medicine (first aid; disease, poison, wounds), Nature (command animal, recall knowledge; identify magic, learn a spell), Occultism (recall knowledge; decipher writing, identify magic, learn a spell), Society (recall knowledge, subsist; create forgery, decipher writing), Survival (sense direction, subsist; cover tracks, track), Religion (recall knowledge; decipher writing, identify magic, learn a spell), Society (recall knowledge, subsist; create forgery), Survival (sense direction, subsist; cover tracks, track), Religion (recall knowledge; decipher writing, identify magic, learn a spell)
  offense SMALLINT(2048), 
  defense SMALLINT(2048),
  speed SMALLINT(2048), 
  mental SMALLINT(2048)
  crouching BOOLEAN,
  x INT(1000092),
  y INT(1000092),
  z INT(1000092),
  dX TINYINT(128),
  dY TINYINT(128),
  dZ TINYINT(128)
);

CREATE TABLE Weapons (
  name TINYTEXT,
  type TINYTEXT,
  itemlevel TINYINT(128),
  price MEDIUMINT(1000092),
  damage TINYINT(128),
  range TINYINT(128),
  critical TINYINT(128),
  capacity TINYINT(128),
  ammousage TINYINT(128),
  bulk TINYTEXT,
  special TINYTEXT,
  description TINYTEXT
);

CREATE TABLE Armor (
  name TINYTEXT,
  itemlevel TINYINT(128),
  type TINYTEXT,
  price MEDIUMINT(1000092),
  EACbonus TINYINT(128),
  KACbonus TINYINT(128),
  maxdexbonus TINYINT(128),
  armorcheckpenalty TINYINT(128),
  speedadjustment TINYINT(128),
  bulk TINYTEXT,
  special TINYTEXT
);

INSERT INTO Weapons (name, type, itemlevel, price, damage, range, critical, capacity, ammousage, bulk, special, description) VALUES
  (
  
  );

INSERT INTO Armor (name, itemlevel, type, price, EACbonus, KACbonus, maxdexbonus, armorcheckpenalty, speedadjustment, bulk, special) VALUES
  (																			

  );
