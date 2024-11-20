import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // Simulate user storage for demonstration purposes
  private users = new Map();

  async findOrCreateUser(profile: any): Promise<any> {
    if (!this.users.has(profile.id)) {
      this.users.set(profile.id, profile);
    }
    return this.users.get(profile.id);
  }
}
