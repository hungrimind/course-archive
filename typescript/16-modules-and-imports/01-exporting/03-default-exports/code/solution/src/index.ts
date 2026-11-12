export default class Formatter {
  uppercase(text: string): string {
    return text.toUpperCase();
  }

  wrap(text: string, wrapper: string): string {
    return wrapper + text + wrapper;
  }
}
