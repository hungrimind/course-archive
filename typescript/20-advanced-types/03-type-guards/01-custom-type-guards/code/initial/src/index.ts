export interface Fish {
  swim: () => string;
}

export interface Bird {
  fly: () => string;
}

export function isFish(animal: Fish | Bird): animal is Fish {

}

export function move(animal: Fish | Bird): string {

}

const fish: Fish = { swim: () => "Swimming!" };
const bird: Bird = { fly: () => "Flying!" };

console.log(move(fish));
console.log(move(bird));
