import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { BoraStore } from '../store/bora.store';

@Injectable({
  providedIn: 'root',
})
export class EditarPerfilService {
  SERVER_URL = 'https://tg-bora-api.vercel.app/putusuarios/';

  constructor(private http: HttpClient, private boraStore: BoraStore) {}

  putDadosUsuarios(data: any) {
    console.log(data);
    return this.http
      .put(`${this.SERVER_URL}${this.boraStore.getIdUsuarioLogado()}`, data)
      .pipe(take(1));
  }
}
