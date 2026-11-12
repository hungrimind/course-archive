export interface Box<T> {

}

export function unbox<T>(box: Box<T>): T {

}

const stringBox: Box<string> = { value: "hello" };
const numberBox: Box<number> = { value: 42 };

console.log(unbox(stringBox));
console.log(unbox(numberBox));
