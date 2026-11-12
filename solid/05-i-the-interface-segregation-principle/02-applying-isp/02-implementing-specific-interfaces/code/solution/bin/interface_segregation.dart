abstract class Printer {
  void printDocument();
}

abstract class Scanner {
  void scanDocument();
}

class SimplePrinter implements Printer {
  @override
  void printDocument() {
    print('SimplePrinter: Printing document');
  }
}

class SimpleScanner implements Scanner {
  @override
  void scanDocument() {
    print('SimpleScanner: Scanning document');
  }
}

class MultiFunctionDevice implements Printer, Scanner {
  @override
  void printDocument() {
    print('MultiFunctionDevice: Printing document');
  }

  @override
  void scanDocument() {
    print('MultiFunctionDevice: Scanning document');
  }
}

void main() {
  final printer = SimplePrinter();
  final scanner = SimpleScanner();
  final mfd = MultiFunctionDevice();

  printer.printDocument();
  scanner.scanDocument();
  mfd.printDocument();
  mfd.scanDocument();
}
