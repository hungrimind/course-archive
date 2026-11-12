import 'dart:io';
import 'package:test/test.dart';

void main() {
  late ProcessResult result;

  setUpAll(() async {
    result = await Process.run(Platform.resolvedExecutable, ['bin/dependency_injection.dart']);
  });

  test('program exits successfully', () {
    expect(result.exitCode, 0, reason: 'Program should exit with code 0');
  });

  test('prints constructor DI with petrol engine', () {
    expect(result.stdout as String, contains('Constructor DI: Petrol engine started'), reason: 'Should show petrol engine started via constructor injection');
  });

  test('prints constructor DI with electric engine', () {
    expect(result.stdout as String, contains('Constructor DI: Electric engine started'), reason: 'Should show electric engine started via constructor injection');
  });

  test('prints setter DI and swapped dependency', () {
    final out = result.stdout as String;
    expect(out, contains('Setter DI: Petrol engine started'), reason: 'Setter injection should start with petrol engine');
    expect(out, contains('Swapped dependency: Electric engine started'), reason: 'Setter injection should allow swapping to electric engine');
  });

  test('prints no engine state when engine is null', () {
    expect(result.stdout as String, contains('Setter DI (no engine): No engine'), reason: 'When no engine is set, CarWithSetter should report "No engine"');
  });
}
