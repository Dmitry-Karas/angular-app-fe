import { Injectable } from '@angular/core';

export interface Credentials {
  name: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  redirectUrl: string | null = null;

  public register(credentials: Credentials) {
    localStorage.setItem('token', 'token');
  }

  public login(credentials: Credentials) {
    localStorage.setItem('token', 'token');
  }

  public isLoggedIn() {
    // return true;
    return localStorage.getItem('token') !== null;
  }

  public logout() {
    localStorage.removeItem('token');
  }
}
