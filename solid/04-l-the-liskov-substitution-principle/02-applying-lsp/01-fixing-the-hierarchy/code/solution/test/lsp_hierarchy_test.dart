import 'dart:io';
import 'package:test/test.dart';

void main() {
  test('program exits successfully', () async {
    final result = await Process.run(Platform.resolvedExecutable, ['bin/lsp_hierarchy.dart']);
    expect(result.exitCode, 0, reason: 'The program should exit with code 0');
  });

  test('eagle flies message is printed', () async {
    final result = await Process.run(Platform.resolvedExecutable, ['bin/lsp_hierarchy.dart']);
    final output = result.stdout as String;
    expect(output, contains('Eddie the Eagle flies.'), reason: 'Eagle should print a flying message');
  });

  test('penguin does not fly message is printed', () async {
    final result = await Process.run(Platform.resolvedExecutable, ['bin/lsp_hierarchy.dart']);
    final output = result.stdout as String;
    expect(output, contains('Penny the Penguin does not fly.'), reason: 'Penguin should not claim to fly');
  });

  test('program prints exactly two bird messages', () async {
    final result = await Process.run(Platform.resolvedExecutable, ['bin/lsp_hierarchy.dart']);
    final output = (result.stdout as String).trim();
    final lines = output.isEmpty ? <String>[] : output.split('\n').map((s) => s.trim()).where((s) => s.isNotEmpty).toList();
    expect(lines.length, 2, reason: 'There should be exactly two lines describing the birds');
    expect(lines[0], 'Eddie the Eagle flies.', reason: 'First line should describe the eagle flying');
    expect(lines[1], 'Penny the Penguin does not fly.', reason: 'Second line should describe the penguin not flying');
  });
}
