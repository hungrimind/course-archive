import 'dart:io';
import 'package:test/test.dart';

void main() {
  test('program exits with code 0', () async {
    final result = await Process.run(Platform.resolvedExecutable, ['bin/inverting_dependency.dart']);
    expect(result.exitCode, 0, reason: 'The program should exit with code 0');
  });

  test('prints saving to file message', () async {
    final result = await Process.run(Platform.resolvedExecutable, ['bin/inverting_dependency.dart']);
    expect(result.stdout.toString(), contains('Saving to file: Report data'), reason: 'Should print the file storage save message');
  });

  test('prints saving to database message', () async {
    final result = await Process.run(Platform.resolvedExecutable, ['bin/inverting_dependency.dart']);
    expect(result.stdout.toString(), contains('Saving to database: Report data'), reason: 'Should print the database storage save message');
  });
}
