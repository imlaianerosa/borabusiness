import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedResponse, Usuario } from './feed';
import { Observable, map, switchMap, tap } from 'rxjs';
import { BoraStore } from '../store/bora.store';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private readonly APIEVENTO = 'https://tg-bora-api.vercel.app/geteventos';

  private readonly APIUSUARIO =
    'https://tg-bora-api.vercel.app/getusuariosbyid/';

  eventoDado: FeedResponse;

  // private readonly url = 'https://tg-bora-api.vercel.app/getusuariosbyId';

  constructor(private http: HttpClient) {}

  // getUserById(userId: string): Observable<any> {
  //   const apiUrl = `${this.url}/${userId}`;
  //   return this.http.get(apiUrl);
  // }

  getEventos() {
    return this.http.get<FeedResponse[]>(this.APIEVENTO).pipe(tap(console.log));
  }

  getDadosUsuarios(data: string){
    return this.http.get<any[]>(`${this.APIUSUARIO}${data}`).pipe(tap(console.log));
  }

  getUserById(data: string){
    return this.http.get<any[]>(`${this.APIUSUARIO}${data}`).pipe(tap(console.log));
  }

}
