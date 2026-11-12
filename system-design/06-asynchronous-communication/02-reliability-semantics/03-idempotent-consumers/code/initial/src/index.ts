export function performAction(payload: string, ledger: string[]): void {
  ledger.push(payload);
}

export function processMessage(
  messageId: string,
  payload: string,
  ledger: string[]
): void {
  performAction(payload, ledger);
}

const actions: string[] = [];

processMessage("msg-1001", "charge:order-501", actions);
processMessage("msg-1001", "charge:order-501", actions);
processMessage("msg-1002", "email:receipt-order-501", actions);

console.log("Actions performed:", actions.join(", "));
console.log("Total actions:", actions.length);
