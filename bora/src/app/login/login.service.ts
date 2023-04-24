import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { loginGet } from './login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  SERVER_URL = 'https://tg-bora-api.vercel.app';

  constructor(private http: HttpClient) {}

  putEsqueciMinhaSenha(data: any) {
    console.log(data);
    return this.http
      .put(`${this.SERVER_URL}/alteraSenha`, { email: data })
      .pipe(take(1));
  }

  getLogin(data: any) {
    return this.http.get<loginGet>(`${this.SERVER_URL}/login`, {
      headers: data,
    });
  }
}
