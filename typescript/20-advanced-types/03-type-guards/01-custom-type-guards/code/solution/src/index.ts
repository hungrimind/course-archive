export interface Fish {
  swim: () => string;
}

export interface Bird {
  fly: () => string;
}

export function isFish(animal: Fish | Bird): animal is Fish {
  return "swim" in animal;
}

export function move(animal: Fish | Bird): string {
  if (isFish(animal)) {
    return animal.swim();
  }
  return animal.fly();
}

const fish: Fish = { swim: () => "Swimming!" };
const bird: Bird = { fly: () => "Flying!" };

console.log(move(fish));
console.log(move(bird));
