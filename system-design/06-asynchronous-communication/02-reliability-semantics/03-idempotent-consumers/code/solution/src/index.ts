export interface DedupeStore {
  has(messageId: string): boolean;
  add(messageId: string): void;
}

export class InMemoryDedupeStore implements DedupeStore {
  private processed = new Set<string>();

  has(messageId: string): boolean {
    return this.processed.has(messageId);
  }

  add(messageId: string): void {
    this.processed.add(messageId);
  }
}

export function isAlreadyProcessed(messageId: string, store: DedupeStore): boolean {
  return store.has(messageId);
}

export function markAsProcessed(messageId: string, store: DedupeStore): void {
  store.add(messageId);
}

export function performAction(payload: string, ledger: string[]): void {
  ledger.push(payload);
}

export function processMessage(
  messageId: string,
  payload: string,
  store: DedupeStore,
  ledger: string[]
): void {
  if (!isAlreadyProcessed(messageId, store)) {
    performAction(payload, ledger);
    markAsProcessed(messageId, store);
  }
}

const store = new InMemoryDedupeStore();
const actions: string[] = [];

processMessage("msg-1001", "charge:order-501", store, actions);
processMessage("msg-1001", "charge:order-501", store, actions);
processMessage("msg-1002", "email:receipt-order-501", store, actions);

console.log("Actions performed:", actions.join(", "));
console.log("Total actions:", actions.length);
