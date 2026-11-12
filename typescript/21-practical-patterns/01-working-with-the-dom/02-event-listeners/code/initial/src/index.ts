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

}

export function addEventListener(
  eventName: string,
  callback: (event: EventInfo) => string
): string {

}

const clickResult = addEventListener("click", describeEvent);
console.log(clickResult);

const keyResult = addEventListener("keypress", describeEvent);
console.log(keyResult);
