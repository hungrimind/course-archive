import { describe, test, expect } from 'vitest';
import { createElement, setTextContent, setAttribute, setStyle } from '../src/index.js';

describe('createElement', () => {
  test('creates element with tagName and empty defaults', () => {
    const el = createElement("div");
    expect(el).toEqual({ tagName: "div", textContent: "", attributes: {}, style: {} });
  });
});

describe('setTextContent', () => {
  test('sets text content on element', () => {
    const el = createElement("h1");
    const updated = setTextContent(el, "Hello");
    expect(updated.textContent).toBe("Hello");
  });
});

describe('setAttribute', () => {
  test('adds an attribute to the element', () => {
    const el = createElement("input");
    const updated = setAttribute(el, "type", "text");
    expect(updated.attributes).toEqual({ type: "text" });
  });

  test('adds multiple attributes', () => {
    let el = createElement("input");
    el = setAttribute(el, "type", "text");
    el = setAttribute(el, "placeholder", "Name");
    expect(el.attributes).toEqual({ type: "text", placeholder: "Name" });
  });
});

describe('setStyle', () => {
  test('sets a style property on the element', () => {
    const el = createElement("h1");
    const updated = setStyle(el, "color", "blue");
    expect(updated.style).toEqual({ color: "blue" });
  });
});
