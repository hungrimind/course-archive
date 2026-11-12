class Database {
  final List<String> _store = [];
  void saveData(String data) {
    _store.add(data);
  }
  List<String> getSaved() => List.unmodifiable(_store);
}

class Report {
  Database db = Database();
  void generateReport(String data) {
    db.saveData(data);
  }
  List<String> getSaved() => db.getSaved();
}

abstract class Storage {
  void save(String data);
  List<String> getAll();
}

class InMemoryStorage implements Storage {
  final List<String> _store = [];
  void save(String data) => _store.add(data);
  List<String> getAll() => List.unmodifiable(_store);
}

class DecoupledReport {
  final Storage storage;
  DecoupledReport(this.storage);
  void generateReport(String data) {
    storage.save(data);
  }
  List<String> getSaved() => storage.getAll();
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
