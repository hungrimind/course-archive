import 'dart:io';
import 'package:test/test.dart';

void main() {
  late ProcessResult result;

  setUpAll(() async {
    result = await Process.run(Platform.resolvedExecutable, ['bin/open_closed_principle.dart']);
  });

  test('prints circle area correctly', () {
    expect(result.stdout, contains('Circle area: 12.57'),
        reason: 'Circle area should be calculated and printed with two decimals.');
  });

  test('prints rectangle area correctly', () {
    expect(result.stdout, contains('Rectangle area: 12.00'),
        reason: 'Rectangle area should be width * height and printed with two decimals.');
  });

  test('prints triangle area correctly', () {
    expect(result.stdout, contains('Triangle area: 4.00'),
        reason: 'Triangle area should be base * height / 2 and printed with two decimals.');
  });

  test('prints total area correctly', () {
    expect(result.stdout, contains('Total area: 28.57'),
        reason: 'Total area should be the sum of individual areas and printed with two decimals.');
  });
}
