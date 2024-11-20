import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; // Import the ApiService

@Component({
  selector: 'app-protected',
  template: `
    <h1>Protected Resource</h1>
    <p>{{ message }}</p>
  `,
})
export class ProtectedComponent implements OnInit {
  message = '';

  constructor(private apiService: ApiService) {}

  async ngOnInit(): Promise<void> {
    try {
      // Fetch the protected resource via ApiService
      const data: any = await this.apiService.getProtectedResource();
      this.message = data.message; // Assuming the response contains a `message` field
    } catch (error) {
      console.error('Error fetching protected resource:', error);
      this.message = 'Error fetching protected resource. Please try again.';
    }
  }
}
