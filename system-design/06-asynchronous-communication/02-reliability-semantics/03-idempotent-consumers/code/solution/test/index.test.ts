import { describe, test, expect } from 'vitest';
import { execSync } from 'node:child_process';
import {
  InMemoryDedupeStore,
  processMessage,
  isAlreadyProcessed,
  markAsProcessed
} from '../src/index';

describe('Idempotent Consumers', () => {
  test('processMessage performs an action only once for duplicate messageId', () => {
    const store = new InMemoryDedupeStore();
    const ledger: string[] = [];

    processMessage('msg-1', 'charge:order-1', store, ledger);
    processMessage('msg-1', 'charge:order-1', store, ledger);

    expect(ledger).toEqual(['charge:order-1']);
  });

  test('different messageIds with same payload are processed independently', () => {
    const store = new InMemoryDedupeStore();
    const ledger: string[] = [];

    processMessage('msg-1', 'email:receipt', store, ledger);
    processMessage('msg-2', 'email:receipt', store, ledger);

    expect(ledger).toEqual(['email:receipt', 'email:receipt']);
  });

  test('dedupe store helpers correctly report and mark processed messages', () => {
    const store = new InMemoryDedupeStore();

    expect(isAlreadyProcessed('msg-9', store)).toBe(false);
    markAsProcessed('msg-9', store);
    expect(isAlreadyProcessed('msg-9', store)).toBe(true);
  });

  test('program output shows duplicates are ignored', () => {
    const output = execSync('npx ts-node src/index.ts', { encoding: 'utf8' });

    expect(output).toContain('Actions performed: charge:order-501, email:receipt-order-501');
    expect(output).toContain('Total actions: 2');
  });
});
