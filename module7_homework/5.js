class Device {
    constructor(name, power) {
      this.deviceName = name;
      this.devicePower = power;
      this.isPluggedIn = false;
    }
  
    plugIn() {
      console.log(`${this.deviceName} включен!`);
      this.isPluggedIn = true;
    }
  
    getPowerUsage() {
      return this.isPluggedIn ? this.devicePower : 0;
    }
  }
  
  const lamp = new Device('Настольная лампа', 60);
  const computer = new Device('Компьютер', 300);
  
  console.log(lamp.getPowerUsage() + computer.getPowerUsage());
  
  lamp.plugIn();
  console.log(lamp.getPowerUsage() + computer.getPowerUsage());
  
  computer.plugIn();
  console.log(lamp.getPowerUsage() + computer.getPowerUsage());