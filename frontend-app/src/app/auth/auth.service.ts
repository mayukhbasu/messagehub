import { Injectable } from '@angular/core';
import { UserManager, User, WebStorageStateStore } from 'oidc-client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userManager: UserManager;
  private currentUser: User | null = null;

  constructor() {
    const settings = {
      authority: 'https://login.microsoftonline.com/900b6b84-d68e-4ee8-bcc2-d0df2da895fb/v2.0',
      client_id: '74d811c1-410e-46c0-89bf-06f8b83fdeff', // Replace with your app's Client ID
      redirect_uri: 'http://localhost:4200/auth-callback', // Angular callback URL
      post_logout_redirect_uri: 'http://localhost:4200/',
      response_type: 'code', // Using Authorization Code Flow with PKCE
      scope: 'openid profile email', // Scopes for access
      userStore: new WebStorageStateStore({ store: window.localStorage }),
    };

    this.userManager = new UserManager(settings);

    // Load the current user if already logged in
    this.userManager.getUser().then((user) => {
      this.currentUser = user;
    });
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return this.currentUser != null && !this.currentUser.expired;
  }

  // Start login process
  login(): void {
    this.userManager.signinRedirect();
  }

  // Complete the login process
  async completeLogin(): Promise<User> {
    this.currentUser = await this.userManager.signinRedirectCallback();
    return this.currentUser;
  }

  // Logout process
  logout(): void {
    this.userManager.signoutRedirect();
  }

  // Complete logout process
  async completeLogout(): Promise<void> {
    await this.userManager.signoutRedirectCallback();
  }

  // Get access token
  getAccessToken(): string | null {
    return this.currentUser?.access_token || null;
  }
}
