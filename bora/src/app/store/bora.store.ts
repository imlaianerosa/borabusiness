import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BoraState } from '../state/bora.state';

@Injectable({
  providedIn: 'root'
})
export class BoraStore {

  private boraStore$ = new BehaviorSubject<BoraState>(new BoraState)

  getBoraState(){
    return this.boraStore$.asObservable();
  }

  setIdUsuarioLogado(idUsuario: string){
    this.boraStore$.next({
      ...this.boraStore$.value,
      usuario: {
        ...this.boraStore$.value.usuario,
        idUsuario
      }
    })
  }

  setIdUsuarioEvento(idUsuario: string){
    this.boraStore$.next({
      ...this.boraStore$.value,
      evento: {
        ...this.boraStore$.value.evento,
        idUsuario
      }
    })
  }
  getIdUsuarioEvento(){
    return this.boraStore$.value.evento.idUsuario
  }

  getIdUsuarioLogado(){
    return this.boraStore$.value.usuario.idUsuario.idUsuario
  }

  constructor() { }
}
