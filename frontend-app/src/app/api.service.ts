import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000'; // Backend URL

  constructor(private http: HttpClient, private authService: AuthService) {}

  async getProtectedResource() {
    try {
      // Retrieve the user's access token from AuthService
      const token = this.authService.getAccessToken(); // Updated method to fetch the token
      if (token) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get(`${this.baseUrl}/protected`, { headers }).toPromise();
      } else {
        throw new Error('User is not authenticated. No access token available.');
      }
    } catch (error) {
      console.error('Error fetching protected resource:', error);
      throw error;
    }
  }
}
