import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-callback',
  template: '<p>Processing authentication...</p>',
})
export class CallbackComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    try {
      // Complete the login process
      await this.authService.completeLogin();

      // Redirect to homepage or desired route after successful login
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Error during authentication callback:', error);
      // Redirect to an error page or display a message
      this.router.navigate(['/error']);
    }
  }
}
