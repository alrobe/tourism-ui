// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { HttpClient } from '@angular/common/http';
import { AuthUser } from './../model/auth-user';

(window as any).global = window;

@Injectable()
export class AuthService {

  baseUrl: string = 'http://localhost:8080/agency';

  auth0 = new auth0.WebAuth({
    clientID: 'jLlyx4GR5v2kARPNI4se7XqfpIbzhYLy',
    domain: 'santos-denikin.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/',
    scope: 'openid'
  });

  constructor(public router: Router, private http: HttpClient) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  public createAcount(email: string, password: string) {
    var body = {
      "client_id": "jLlyx4GR5v2kARPNI4se7XqfpIbzhYLy",
      "email": email,
      "password": password,
      "connection": "Username-Password-Authentication",
      "user_metadata": { plan: 'silver', team_id: 'a111' }
    };
    this.http.post("https://santos-denikin.auth0.com/dbconnections/signup", body).toPromise();
  }
}