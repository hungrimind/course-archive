export function selectElement(id: string): string | null {

}

export function selectTypedElement<T extends string>(selector: string, tagName: T): { selector: string; tagName: T } | null {

}

export function handleNullableElement(selector: string): string {

}

const result1 = selectElement("#submit");
console.log(result1);

const result2 = selectElement("invalid");
console.log(result2);

const typed = selectTypedElement("#btn", "button");
console.log(typed);

const handled = handleNullableElement("#header");
console.log(handled);

const missing = handleNullableElement("nope");
console.log(missing);
