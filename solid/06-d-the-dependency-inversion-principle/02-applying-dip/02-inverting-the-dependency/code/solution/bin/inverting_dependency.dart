abstract class Storage {
  void save(String data);
}

class FileStorage implements Storage {
  void save(String data) {
    print('Saving to file: $data');
  }
}

class DatabaseStorage implements Storage {
  void save(String data) {
    print('Saving to database: $data');
  }
}

class ReportGenerator {
  final Storage storage;

  ReportGenerator(this.storage);

  void generate() {
    storage.save('Report data');
  }
}

void main() {
  final fileGenerator = ReportGenerator(FileStorage());
  fileGenerator.generate();

  final dbGenerator = ReportGenerator(DatabaseStorage());
  dbGenerator.generate();
}
