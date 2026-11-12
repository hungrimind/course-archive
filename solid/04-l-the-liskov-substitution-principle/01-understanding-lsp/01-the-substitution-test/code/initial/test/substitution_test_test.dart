import 'dart:io';
import 'package:test/test.dart';

void main() {
  test('prints header', () async {
    final result = await Process.run(Platform.executable, ['bin/substitution_test.dart']);
    expect(result.exitCode, 0, reason: 'Program should exit with code 0');
    expect(result.stdout, contains('Substitution test results:'), reason: 'Output should contain the header line');
  });

  test('sparrow substitution passes', () async {
    final result = await Process.run(Platform.executable, ['bin/substitution_test.dart']);
    expect(result.stdout, contains('Sparrow: passed'), reason: 'Sparrow should be able to substitute for Bird and pass the fly check');
  });

  test('ostrich substitution fails with clear message', () async {
    final result = await Process.run(Platform.executable, ['bin/substitution_test.dart']);
    expect(result.stdout, contains("Ostrich: failed - Ostriches can't fly"), reason: 'Ostrich should fail the substitution test and include the reason');
  });

  test('output contains exactly three lines (header + 2 results)', () async {
    final result = await Process.run(Platform.executable, ['bin/substitution_test.dart']);
    final lines = result.stdout.toString().trim().split('\n');
    expect(lines.length, 3, reason: 'There should be exactly three lines: header and two test results');
  });
}
