import { describe, test, expect } from 'vitest';
import { travel, Car, Boat } from '../src/index.js';

describe('travel', () => {
  test('calls drive on a Car', () => {
    const car: Car = { drive: () => "Driving on the road!" };
    expect(travel(car)).toBe("Driving on the road!");
  });

  test('calls sail on a Boat', () => {
    const boat: Boat = { sail: () => "Sailing the seas!" };
    expect(travel(boat)).toBe("Sailing the seas!");
  });

  test('works with different drive message', () => {
    const car: Car = { drive: () => "Vroom!" };
    expect(travel(car)).toBe("Vroom!");
  });

  test('works with different sail message', () => {
    const boat: Boat = { sail: () => "Anchors aweigh!" };
    expect(travel(boat)).toBe("Anchors aweigh!");
  });
});
