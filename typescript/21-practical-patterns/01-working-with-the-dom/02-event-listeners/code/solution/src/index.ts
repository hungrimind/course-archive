type MouseEventInfo = {
  type: "click";
  clientX: number;
  clientY: number;
};

type KeyboardEventInfo = {
  type: "keypress";
  key: string;
};

type EventInfo = MouseEventInfo | KeyboardEventInfo;

export function describeEvent(event: EventInfo): string {
  if (event.type === "click") {
    return `Clicked at ${event.clientX}, ${event.clientY}`;
  }
  return `Key pressed: ${event.key}`;
}

export function addEventListener(
  eventName: string,
  callback: (event: EventInfo) => string
): string {
  if (eventName === "click") {
    return callback({ type: "click", clientX: 100, clientY: 200 });
  }
  return callback({ type: "keypress", key: "Enter" });
}

const clickResult = addEventListener("click", describeEvent);
console.log(clickResult);

const keyResult = addEventListener("keypress", describeEvent);
console.log(keyResult);
