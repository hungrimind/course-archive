export class Formatter {
  format(text: string): string {
    return text;
  }
}

export class UpperFormatter extends Formatter {
  format(text: string): string {
    return text.toUpperCase();
  }
}
