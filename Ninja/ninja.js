class Ninja {
    constructor(name, health) {
      this.name = name;
      this.health = health;
      this.speed = 3;
      this.strength = 3;
    }
    sayName() {
      console.log(`This is the name ${this.name}`);
    }
    showStats() {
      console.log(
        `${this.name} , ${this.health} , ${this.speed} , ${this.strength} `
      );
    }
    drinkSake() {
      this.health += 10;
      return this.health;
    }
  }
  // nicee
  const ninja1 = new Ninja("Johan", 100);
  
  ninja1.sayName();
  ninja1.showStats();
  console.log(ninja1.drinkSake());
  
  class Sensei extends Ninja {
    constructor(name) {
      super(name, 200);
      this.speed = 10;
      this.strength = 10;
      this.wisdom = 10;
    }
  
    speakWisdom() {
      super.drinkSake();
      console.log("A wise message");
    }
  }
  
  const sensei1 = new Sensei("Master Splinter");
  sensei1.speakWisdom();
  sensei1.showStats();    
  