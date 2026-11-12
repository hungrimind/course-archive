import { describe, test, expect } from 'vitest';
import { Vehicle, Truck } from '../src/index.js';

describe('Extending a class', () => {
  test('Truck inherits name from Vehicle', () => {
    const truck = new Truck("Freightliner");
    expect(truck.name).toBe("Freightliner");
  });

  test('Truck inherits describe method from Vehicle', () => {
    const truck = new Truck("Freightliner");
    expect(truck.describe()).toBe("Freightliner is a vehicle");
  });

  test('Truck has its own haul method', () => {
    const truck = new Truck("Mack");
    expect(truck.haul()).toBe("Mack hauls the cargo");
  });

  test('Truck is an instance of Vehicle', () => {
    const truck = new Truck("Freightliner");
    expect(truck instanceof Vehicle).toBe(true);
  });
});
