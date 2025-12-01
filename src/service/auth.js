export default class AuthService {
  constructor(tokenStorage) {
    this.tokenStorage = tokenStorage;
  }

  async signup(user, password, name, email, url) {}

  async login(userid, password) {}

  async me() {
    const token = this.tokenStorage.getToken();
  }

  async logout() {
    this.tokenStorage.clearToken();
  }
}
