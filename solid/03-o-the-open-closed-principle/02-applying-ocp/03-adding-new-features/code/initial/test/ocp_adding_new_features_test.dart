import 'dart:io';

import 'package:test/test.dart';

import '../bin/ocp_adding_new_features.dart';

void main() {
  group('Function-level: Shape extensions', () {
    test('Square.area calculates side * side', () {
      final square = Square(3);
      expect(square.area(), 9.0, reason: 'Square with side 3 should have area 9.');
    });

    test('totalArea sums areas of mixed shapes (Circle + Square)', () {
      final shapes = <Shape>[Circle(2), Square(3)];
      final total = totalArea(shapes);
      expect(
        total,
        closeTo(21.56, 1e-9),
        reason: 'Total should be circle area (3.14*2*2=12.56) + square area (3*3=9) = 21.56.',
      );
    });

    test('Square is substitutable as a Shape', () {
      final shapes = <Shape>[Square(3)];
      expect(
        totalArea(shapes),
        9.0,
        reason: 'Square should work wherever Shape is expected (LSP-style substitutability check).',
      );
    });
  });

  group('Output-based: program uses the new Square in main()', () {
    test('Running the program prints the expected total area', () async {
      final result = await Process.run(
        'dart',
        ['run', 'bin/ocp_adding_new_features.dart'],
      );

      expect(result.exitCode, 0, reason: 'Program should exit cleanly. stderr: ${result.stderr}');

      final stdoutStr = (result.stdout as String).trim();
      expect(
        stdoutStr,
        'Total area: 21.56',
        reason: 'Output should reflect shapes list containing Circle(2) and Square(3), totaling 21.56.',
      );
    });
  });
}
