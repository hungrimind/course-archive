import 'dart:io';
import 'package:test/test.dart';

void main() {
  group('Dependency Inversion Principle example', () {
    test('prints EmailService notification', () async {
      final result = await Process.run(Platform.executable, ['run', 'bin/dependency_inversion.dart']);
      expect(result.exitCode, 0, reason: 'The program should exit with code 0');
      final out = result.stdout as String;
      expect(out, contains("EmailService: Sending 'Welcome'"), reason: 'EmailService should send the Welcome message');
    });

    test('prints SmsService notification', () async {
      final result = await Process.run(Platform.executable, ['run', 'bin/dependency_inversion.dart']);
      expect(result.exitCode, 0, reason: 'The program should exit with code 0');
      final out = result.stdout as String;
      expect(out, contains("SmsService: Sending 'Welcome'"), reason: 'SmsService should send the Welcome message');
    });

    test('prints notifications in order', () async {
      final result = await Process.run(Platform.executable, ['run', 'bin/dependency_inversion.dart']);
      expect(result.exitCode, 0, reason: 'The program should exit with code 0');
      final out = result.stdout as String;
      final expected = "EmailService: Sending 'Welcome'\nSmsService: Sending 'Welcome'\n";
      expect(out, equals(expected), reason: 'Program should print email then sms notifications in order with exact formatting');
    });
  });
}
