class AuthService {
  final Map<String, String> _users = {'alice': 'password123'};
  bool authenticate(String username, String password) => _users[username] == password;
}

class DataService {
  List<String> fetchData() => ['Task A', 'Task B', 'Task C'];
}

class UserManager {
  final AuthService auth;
  final DataService data;
  UserManager(this.auth, this.data);
  void run(String username, String password) {
    final authenticated = auth.authenticate(username, password);
    if (!authenticated) {
      print('Authentication failed');
      return;
    }
    print('Authentication successful');
    final items = data.fetchData();
    print('Data:');
    for (final item in items) {
      print('- $item');
    }
  }
}

void main() {
  final authService = AuthService();
  final dataService = DataService();
  final manager = UserManager(authService, dataService);
  manager.run('alice', 'password123');
}
