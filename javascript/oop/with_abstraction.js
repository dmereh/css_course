class CoffeMachine {
    #waterLevel = 0; //private field
    #power = false; //private field


  addWater(amount) {
    this.#waterLevel += amount;
    console.log(`water added. Current level: ${this.waterLevel}`);
  }

  #checkPower() {
    if (!this.#power) {
        throw new Error("Machine is off, Please turn it on");
    }
  }

  turnOn() {
    this.#power = true;
    console.log("Machine is on");
  }

  brew() {
    try {
        this.#checkPower();
        if(this.#waterLevel <10) {
            throw new Error ("Not enough water to bre coffee!");
        }
        this.#waterLevel -= 10;
        console.log("Brewing coffee...")
    } catch (error) {
        console.log(error.message);
        }
        }
    }

const machine = new CoffeMachine();
machine.addWater(15);
machine.turnOn();
machine.brew(); //output: coffee is brewing
machine.waterLevel = -10; //directly modifying state can break functionality
