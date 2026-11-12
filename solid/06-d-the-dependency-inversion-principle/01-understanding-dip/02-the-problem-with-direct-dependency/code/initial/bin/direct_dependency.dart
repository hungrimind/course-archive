class Database {
  final List<String> _store = [];
  void saveData(String data) {
    // TODO: Save the provided data into the internal storage
  }
  List<String> getSaved() {
    // TODO: Return the saved data as an unmodifiable list
    return [];
  }
}

class Report {
  Database db = Database();
  void generateReport(String data) {
    // TODO: Use the Database to save the report data
  }
  List<String> getSaved() {
    // TODO: Return the data saved by the direct Database dependency
    return [];
  }
}

abstract class Storage {
  void save(String data);
  List<String> getAll();
}

class InMemoryStorage implements Storage {
  final List<String> _store = [];
  void save(String data) {
    // TODO: Save the provided data into the in-memory store
  }
  List<String> getAll() {
    // TODO: Return all data stored in memory as an unmodifiable list
    return [];
  }
}

class DecoupledReport {
  final Storage storage;
  DecoupledReport(this.storage);
  void generateReport(String data) {
    // TODO: Use the provided Storage to save the report data
  }
  List<String> getSaved() {
    // TODO: Return the data from the provided Storage implementation
    return [];
  }
}

void main() {
  var directReport = Report();
  directReport.generateReport('direct1');
  directReport.generateReport('direct2');
  print('Direct:${directReport.getSaved()}');

  var decoupledReport = DecoupledReport(InMemoryStorage());
  decoupledReport.generateReport('dec1');
  print('Decoupled:${decoupledReport.getSaved()}');
}
