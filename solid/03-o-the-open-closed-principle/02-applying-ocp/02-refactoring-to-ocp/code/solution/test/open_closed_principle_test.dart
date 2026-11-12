import 'dart:io';
import 'package:test/test.dart';

void main() {
  test('program exits successfully', () async {
    final result = await Process.run('dart', ['bin/open_closed_principle.dart']);
    expect(result.exitCode, 0, reason: 'The program should exit with code 0');
  });

  test('prints regular discount result', () async {
    final result = await Process.run('dart', ['bin/open_closed_principle.dart']);
    expect(result.stdout.toString(), contains('Regular: 90.0'), reason: 'Regular discount should be 90.0 for price 100.0');
  });

  test('prints vip discount result', () async {
    final result = await Process.run('dart', ['bin/open_closed_principle.dart']);
    expect(result.stdout.toString(), contains('VIP: 80.0'), reason: 'VIP discount should be 80.0 for price 100.0');
  });

  test('prints none discount result', () async {
    final result = await Process.run('dart', ['bin/open_closed_principle.dart']);
    expect(result.stdout.toString(), contains('None: 100.0'), reason: 'No discount should leave price unchanged at 100.0');
  });
}
