export type Car = { drive: () => string };
export type Boat = { sail: () => string };

export function travel(vehicle: Car | Boat): string {
  if ("drive" in vehicle) {
    return vehicle.drive();
  }
  return vehicle.sail();
}
