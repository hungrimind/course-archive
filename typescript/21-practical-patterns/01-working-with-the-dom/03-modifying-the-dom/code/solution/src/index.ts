type ElementModel = {
  tagName: string;
  textContent: string;
  attributes: Record<string, string>;
  style: Record<string, string>;
};

export function createElement(tagName: string): ElementModel {
  return { tagName, textContent: "", attributes: {}, style: {} };
}

export function setTextContent(element: ElementModel, text: string): ElementModel {
  return { ...element, textContent: text };
}

export function setAttribute(element: ElementModel, key: string, value: string): ElementModel {
  return { ...element, attributes: { ...element.attributes, [key]: value } };
}

export function setStyle(element: ElementModel, property: string, value: string): ElementModel {
  return { ...element, style: { ...element.style, [property]: value } };
}

let heading = createElement("h1");
heading = setTextContent(heading, "New Title");
heading = setStyle(heading, "color", "blue");
heading = setAttribute(heading, "id", "main-title");
console.log(heading);

let input = createElement("input");
input = setAttribute(input, "type", "text");
input = setAttribute(input, "placeholder", "Enter name");
console.log(input);
