class CoffeMachine {
    constructor() {
        this.waterLevel = 0; //public property
        this.power = false; //public property
    }


addWater(amount) {
    this.waterLevel += amount;
    console.log (`water added. Current level: ${this.waterLevel}`);
    }

    turnOn() {
        this.power = true;
        console.log('Machine is on');
    }

    brew() {
        if (!this.power) {
            console.log('Error: Turn on the machine first!');
            return;
        }
        if (this.waterLevel < 10) {
            console.log('Error: Not enough water to brew the coffee!');
            return;
    }
    this.waterLevel -= 10;
    console.log('Coffee is brewing...');
    }
}

const machine = new CoffeMachine();
machine.addWater(15);
machine.turnOn();
machine.brew(); //output: coffee is brewing
machine.waterLevel = -10; //directly modifying state can break functionality