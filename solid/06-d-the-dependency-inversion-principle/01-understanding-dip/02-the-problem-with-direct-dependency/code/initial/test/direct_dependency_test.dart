import 'dart:io';
import 'package:test/test.dart';

void main() {
  late ProcessResult result;

  setUpAll(() async {
    result = await Process.run('dart', ['run', 'bin/direct_dependency.dart']);
  });

  test('program exits successfully', () {
    expect(result.exitCode, 0, reason: 'The script should exit with code 0');
  });

  test('direct report saves and prints items in order', () {
    expect(result.stdout, contains('Direct:[direct1, direct2]'),
        reason: 'Direct report should save two items and print them in order');
  });

  test('decoupled report uses injected storage and prints saved items', () {
    expect(result.stdout, contains('Decoupled:[dec1]'),
        reason: 'Decoupled report should save item to injected storage and print it');
  });
}
