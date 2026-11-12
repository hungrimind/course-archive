abstract class Printer {
  String printDocument(String doc);
}

abstract class Scanner {
  String scanDocument(String doc);
}

abstract class Fax {
  String faxDocument(String doc);
}

class SimplePrinter implements Printer {
  @override
  String printDocument(String doc) {
    // TODO: Return "SimplePrinter printed: $doc"
    return '';
  }
}

class AllInOneMachine implements Printer, Scanner, Fax {
  @override
  String printDocument(String doc) {
    // TODO: Return "AllInOne printed: $doc"
    return '';
  }

  @override
  String scanDocument(String doc) {
    // TODO: Return "AllInOne scanned: $doc"
    return '';
  }

  @override
  String faxDocument(String doc) {
    // TODO: Return "AllInOne faxed: $doc"
    return '';
  }
}

class FaxMachine implements Fax {
  @override
  String faxDocument(String doc) {
    // TODO: Return "FaxMachine faxed: $doc"
    return '';
  }
}

void main() {
  final printer = SimplePrinter();
  final aio = AllInOneMachine();
  final fax = FaxMachine();

  print(printer.printDocument('Report'));
  print(aio.printDocument('Invoice'));
  print(aio.scanDocument('Form'));
  print(aio.faxDocument('Contract'));
  print(fax.faxDocument('Letter'));
}
