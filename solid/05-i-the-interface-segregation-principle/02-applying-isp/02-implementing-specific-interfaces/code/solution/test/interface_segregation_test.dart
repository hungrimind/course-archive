import 'dart:io';
import 'package:test/test.dart';

void main() {
  test('SimplePrinter prints document', () async {
    final result = await Process.run('dart', ['run', 'bin/interface_segregation.dart']);
    expect(result.exitCode, 0, reason: 'Program should exit with code 0');
    final out = result.stdout as String;
    expect(out.contains('SimplePrinter: Printing document'), isTrue, reason: 'Should print SimplePrinter printing message');
  });

  test('SimpleScanner scans document', () async {
    final result = await Process.run('dart', ['run', 'bin/interface_segregation.dart']);
    final out = result.stdout as String;
    expect(out.contains('SimpleScanner: Scanning document'), isTrue, reason: 'Should print SimpleScanner scanning message');
  });

  test('MultiFunctionDevice prints and scans', () async {
    final result = await Process.run('dart', ['run', 'bin/interface_segregation.dart']);
    final out = result.stdout as String;
    expect(out.contains('MultiFunctionDevice: Printing document'), isTrue, reason: 'Should print MultiFunctionDevice printing message');
    expect(out.contains('MultiFunctionDevice: Scanning document'), isTrue, reason: 'Should print MultiFunctionDevice scanning message');
  });
}
