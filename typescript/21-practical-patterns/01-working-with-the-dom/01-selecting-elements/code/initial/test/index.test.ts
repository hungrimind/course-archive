import { describe, test, expect } from 'vitest';
import { selectElement, selectTypedElement, handleNullableElement } from '../src/index.js';

describe('selectElement', () => {
  test('returns string for valid id selector', () => {
    expect(selectElement('#submit')).toBe('Selected: #submit');
  });

  test('returns string for valid class selector', () => {
    expect(selectElement('.container')).toBe('Selected: .container');
  });

  test('returns null for invalid selector', () => {
    expect(selectElement('invalid')).toBeNull();
  });
});

describe('selectTypedElement', () => {
  test('returns typed object for valid selector', () => {
    const result = selectTypedElement('#btn', 'button');
    expect(result).toEqual({ selector: '#btn', tagName: 'button' });
  });

  test('returns null for empty selector', () => {
    expect(selectTypedElement('', 'div')).toBeNull();
  });
});

describe('handleNullableElement', () => {
  test('returns element string when found', () => {
    expect(handleNullableElement('#header')).toBe('Selected: #header');
  });

  test('returns fallback when not found', () => {
    expect(handleNullableElement('nope')).toBe('Element not found');
  });
});
