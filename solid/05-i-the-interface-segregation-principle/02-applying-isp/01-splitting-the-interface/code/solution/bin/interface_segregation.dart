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
  String printDocument(String doc) => 'SimplePrinter printed: $doc';
}

class AllInOneMachine implements Printer, Scanner, Fax {
  @override
  String printDocument(String doc) => 'AllInOne printed: $doc';

  @override
  String scanDocument(String doc) => 'AllInOne scanned: $doc';

  @override
  String faxDocument(String doc) => 'AllInOne faxed: $doc';
}

class FaxMachine implements Fax {
  @override
  String faxDocument(String doc) => 'FaxMachine faxed: $doc';
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
