import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroEventoService {
  SERVER_URL = 'https://tg-bora-api.vercel.app';

  constructor(private http: HttpClient) { }

  postEventos(data: any) {
    return this.http.post(`${this.SERVER_URL}/seteventos`, data).pipe(take(1));
  }
}
