abstract class NotificationService {
  void send(String message);
}

class EmailService implements NotificationService {
  void send(String message) {
    print("EmailService: Sending '$message'");
  }
}

class SmsService implements NotificationService {
  void send(String message) {
    print("SmsService: Sending '$message'");
  }
}

class NotificationManager {
  final NotificationService service;
  NotificationManager(this.service);
  void notify(String message) => service.send(message);
}

void main() {
  final message = 'Welcome';
  final emailManager = NotificationManager(EmailService());
  emailManager.notify(message);
  final smsManager = NotificationManager(SmsService());
  smsManager.notify(message);
}
