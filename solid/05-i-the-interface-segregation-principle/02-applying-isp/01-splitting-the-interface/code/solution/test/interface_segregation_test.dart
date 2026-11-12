import 'dart:io';
import 'package:test/test.dart';

late ProcessResult result;

void main() {
  setUpAll(() async {
    result = await Process.run('dart', ['run', 'bin/interface_segregation.dart']);
  });

  test('program exits successfully', () {
    expect(result.exitCode, 0, reason: 'Program should exit with code 0');
  });

  test('SimplePrinter prints a document', () {
    final output = result.stdout as String;
    expect(output.contains('SimplePrinter printed: Report'), true,
        reason: 'Should contain SimplePrinter printed message');
  });

  test('AllInOne prints and scans documents', () {
    final output = result.stdout as String;
    expect(output.contains('AllInOne printed: Invoice'), true,
        reason: 'Should contain AllInOne printed message');
    expect(output.contains('AllInOne scanned: Form'), true,
        reason: 'Should contain AllInOne scanned message');
  });

  test('AllInOne and FaxMachine fax documents', () {
    final output = result.stdout as String;
    expect(output.contains('AllInOne faxed: Contract'), true,
        reason: 'Should contain AllInOne faxed message');
    expect(output.contains('FaxMachine faxed: Letter'), true,
        reason: 'Should contain FaxMachine faxed message');
  });
}
