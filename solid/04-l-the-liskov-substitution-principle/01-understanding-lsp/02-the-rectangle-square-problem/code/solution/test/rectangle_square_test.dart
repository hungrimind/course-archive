import 'dart:io';
import 'package:test/test.dart';

void main() {
  late ProcessResult result;

  setUpAll(() async {
    result = await Process.run(Platform.executable, ['bin/rectangle_square.dart']);
  });

  test('prints rectangle area for 3x4', () {
    final output = result.stdout.toString().trim().split('\n');
    expect(output[0], 'Rectangle area: 12.0', reason: 'Expected rectangle 3x4 area to be 12.0');
  });

  test('prints square area for side 5', () {
    final output = result.stdout.toString().trim().split('\n');
    expect(output[1], 'Square area: 25.0', reason: 'Expected square side 5 area to be 25.0');
  });

  test('prints rectangle area after resizing to 5x6', () {
    final output = result.stdout.toString().trim().split('\n');
    expect(output[2], 'Rectangle after resize: 30.0', reason: 'Expected rectangle 5x6 area to be 30.0');
  });

  test('prints square area after resizing side to 7', () {
    final output = result.stdout.toString().trim().split('\n');
    expect(output[3], 'Square after resize: 49.0', reason: 'Expected square side 7 area to be 49.0');
  });
}
