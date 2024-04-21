CREATE DATABASE game;

CREATE TABLE characters (
  name TINYTEXT,
  category TINYTEXT,
  offense SMALLINT(2048), --Athletics (climb, force open, grapple, high jump, long jump, reposition, shove, swim, trip; disarm),
  defense SMALLINT(2048), --n/a
  speed SMALLINT(2048), --Acrobatics (balance, tumble through; fly maneuver, squeeze), Piloting, Stealth (conceal object, hide, sneak), Thievery (palm object, steal; disable device, pick lock)
  mental SMALLINT(2048), --Arcana (recall knowledge; borrow an arcane spell, decipher writing, identify magic, learn a spell), Computers, Crafting (recall knowledge, repair; craft, earn income, identify alchemy), Deception (create diversion, impersonate, lie; feint), Diplomacy (gather information, make impression, request), Intimidate (coerce, demoralize), Lore (recall knowledge; earn income), Medicine (first aid; disease, poison, wounds), Nature (command animal, recall knowledge; identify magic, learn a spell), Occultism (recall knowledge; decipher writing, identify magic, learn a spell), Society (recall knowledge, subsist; create forgery, decipher writing), Survival (sense direction, subsist; cover tracks, track), Religion (recall knowledge; decipher writing, identify magic, learn a spell), Society (recall knowledge, subsist; create forgery), Survival (sense direction, subsist; cover tracks, track), Religion (recall knowledge; decipher writing, identify magic, learn a spell)
  crouching BOOLEAN,
  x INT(1000092),
  y INT(1000092),
  z INT(1000092),
  dX TINYINT(128),
  dY TINYINT(128),
  dZ TINYINT(128)
);
