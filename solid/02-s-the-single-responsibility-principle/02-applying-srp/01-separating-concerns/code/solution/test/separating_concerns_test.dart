import 'dart:io';
import 'package:test/test.dart';

void main() {
  test('program exits with code 0 and confirms authentication', () async {
    final result = await Process.run('dart', ['run', 'bin/separating_concerns.dart']);
    expect(result.exitCode, 0, reason: 'Program should exit cleanly with code 0');
    expect(result.stdout, contains('Authentication successful'), reason: 'Should confirm authentication succeeded');
  });

  test('program prints fetched data items', () async {
    final result = await Process.run('dart', ['run', 'bin/separating_concerns.dart']);
    expect(result.stdout, contains('- Task A'), reason: 'Should list Task A');
    expect(result.stdout, contains('- Task B'), reason: 'Should list Task B');
    expect(result.stdout, contains('- Task C'), reason: 'Should list Task C');
  });

  test('authentication message appears before data list', () async {
    final result = await Process.run('dart', ['run', 'bin/separating_concerns.dart']);
    final out = result.stdout as String;
    final authIndex = out.indexOf('Authentication successful');
    final dataIndex = out.indexOf('Data:');
    expect(authIndex, greaterThanOrEqualTo(0), reason: 'Authentication message should be present');
    expect(dataIndex, greaterThan(authIndex), reason: 'Data should be printed after authentication');
  });
}
