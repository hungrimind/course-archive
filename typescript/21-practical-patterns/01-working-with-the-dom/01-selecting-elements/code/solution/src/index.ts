export function selectElement(id: string): string | null {
  const found = id.startsWith("#") || id.startsWith(".");
  return found ? `Selected: ${id}` : null;
}

export function selectTypedElement<T extends string>(selector: string, tagName: T): { selector: string; tagName: T } | null {
  if (!selector) return null;
  return { selector, tagName };
}

export function handleNullableElement(selector: string): string {
  const element = selectElement(selector);
  if (element) {
    return element;
  }
  return "Element not found";
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
