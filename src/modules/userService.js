export class UserService {
  _users = [];

  get users() {
    return this._users;
  };

  set users(users) {
    this._users = users;
  };

  logger() {
    console.log(this.users);
  };

  getUsers() {
    return fetch('http://localhost:4545/users')
      .then(res => res.json());
  };

};