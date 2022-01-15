import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login (User) {
    this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]', User)
  }
}
