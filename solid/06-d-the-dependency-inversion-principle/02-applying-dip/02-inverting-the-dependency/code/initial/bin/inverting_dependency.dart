abstract class Storage {
  void save(String data);
}

class FileStorage implements Storage {
  void save(String data) {
    // TODO: Print 'Saving to file: <data>'
  }
}

class DatabaseStorage implements Storage {
  void save(String data) {
    // TODO: Print 'Saving to database: <data>'
  }
}

class ReportGenerator {
  final Storage storage;

  ReportGenerator(this.storage);

  void generate() {
    // TODO: Call storage.save with 'Report data'
  }
}

void main() {
  final fileGenerator = ReportGenerator(FileStorage());
  fileGenerator.generate();

  final dbGenerator = ReportGenerator(DatabaseStorage());
  dbGenerator.generate();
}
