import 'dart:io';
import 'package:test/test.dart';

late ProcessResult result;

void main() {
  setUpAll(() async {
    result = await Process.run(Platform.resolvedExecutable, ['bin/open_for_extension.dart']);
  });

  test('script exits successfully', () {
    expect(result.exitCode, 0, reason: 'The script should exit with code 0');
  });

  test('prints correct Circle area', () {
    expect(result.stdout, contains('Circle area: 12.56'), reason: 'Expected Circle area to be 12.56');
  });

  test('prints correct Rectangle and Triangle areas', () {
    expect(result.stdout, contains('Rectangle area: 12.00'), reason: 'Expected Rectangle area to be 12.00');
    expect(result.stdout, contains('Triangle area: 6.00'), reason: 'Expected Triangle area to be 6.00');
  });

  test('prints correct total area', () {
    expect(result.stdout, contains('Total area: 30.56'), reason: 'Expected total area to be 30.56');
  });
}
