/* Player constructor and methods go here */
// Player class to encapsulate player state
class Player {
  constructor() {
    this.xp = 0;
    this.gold = 50;
    this.health = 100;
    //this.charName = prompt("Enter your character name:");
  //  let img = prompt("Enter your character image URL (http(s)://...):");
  this.charName="Megan";
    this.image = "https://live.staticflickr.com/7497/15777223905_56fc88d315_b.jpg";
	this.currentWeapon = 0;
	this.buyWeapon = this.buyWeapon.bind(this); // ← bind once so button knows which player to use
	this.weapons = [0];
  }

  buyWeapon() {
	console.log("buy weapon");
	console.log(this.currentWeapon) // + ":" + allWeapons.length)
    if (this.currentWeapon < allWeapons.length - 1) {
		console.log("weapon check");
    	if (this.gold >= 30) {
			console.log("gold check");
            this.gold -= 30;
            this.currentWeapon++;
			this.weapons.push(this.currentWeapon);
            goldText.innerText = this.gold;
            let newWeapon = allWeapons[this.currentWeapon].name;
    		text.innerText = "You now have a " + newWeapon + ".";
    	} else {
    		text.innerText = "You do not have enough gold to buy anew weapon.";
    	} 
		} else {
			text.innerText = "You already have the most powerful weapon!";
			button2.innerText = "Sell weapon for 15 gold";
			button2.onclick = sellWeapon;
		}
	}

}
