export class Vehicle {
  constructor(public name: string) {}

  describe(): string {
    return `${this.name} is a vehicle`;
  }
}

export class Truck extends Vehicle {
  haul(): string {
    return `${this.name} hauls the cargo`;
  }
}
