export class User {
    public id: string;
    public email: string;
    public password: string;
    public username: string;
    public role: string;
    public firstName: string;
    public lastName: string;
  
    constructor(data) {
      this.id = data.id || null;
      this.email = data.email || null;
      this.password = data.password || null;
      this.username = data.username || null;
      this.role = data.role || null;
      this.firstName = data.firstName || null;
      this.lastName = data.lastName || null;
    }
}
  