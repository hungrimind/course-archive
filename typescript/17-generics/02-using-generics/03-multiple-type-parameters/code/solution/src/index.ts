export function convert<I, O>(input: I, fn: (val: I) => O): O {
  return fn(input);
}
