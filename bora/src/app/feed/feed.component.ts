import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeedService } from './feed.service';
import { BoraStore } from '../store/bora.store';
import { FeedResponse } from './feed';
import { Observable, forkJoin, tap } from 'rxjs';
import { BaseBoraComponent } from '../shared/components/base-bora/base-bora.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent extends BaseBoraComponent {
  mostrarPerfil: boolean = false;
  eventos: any;
  idUsuario: any;
  dadoUsuario: any;
  index: number;
  public menuOpen = false;
  fotoUser: any;
  nomeUser: any;
  linkedin: any;
  email: any;
  usuarios: any;
  usuariosFoto: any;
  perfiil: any;
  private readonly APIUSUARIO =
    'https://tg-bora-api.vercel.app/getusuariosbyid/';

  constructor(
    private router: Router,
    private feedService: FeedService,
    private boraStore: BoraStore,
    private http: HttpClient
  ) {
    super();
  }

  ngOnInit(): void {
    this.feedService.getEventos().subscribe((dados: any[]) => {
      this.eventos = dados;
    });
  }

  onItemClick(index: number): void {
    this.boraStore.setIdUsuarioEvento(this.eventos[index].idUsuario);
    console.log(this.boraStore.getIdUsuarioEvento());
    console.log(`Item ${index} clicado`);
    this.router.navigate(['/chat']);
  }

  teste(index: number) {
    const id = this.eventos[index].idUsuario;
    this.feedService.getDadosUsuarios(id).subscribe((dados) => {
      this.dadoUsuario = dados;
      const i = index;
      setTimeout(() => {
        console.log(this.dadoUsuario[i].nome);
        // this.perfiil = this.dadoUsuario[i].nome;
        // this.linkedin = this.dadoUsuario[0].linkedin;
        // this.email = this.dadoUsuario[0].email;
        // this.fotoUser = this.dadoUsuario[0].fotoPerfil;
      }, 1000);
    });
  }

  setDadosDoUsuario(index: number) {
    const id = this.eventos[index].idUsuario;
    this.feedService
      .getDadosUsuarios(id)
      .subscribe((dados) => (this.dadoUsuario = dados));
    setTimeout(() => {
      this.nomeUser = this.dadoUsuario[0].nome;
      this.linkedin = this.dadoUsuario[0].linkedin;
      this.email = this.dadoUsuario[0].email;
      this.fotoUser = this.dadoUsuario[0].fotoPerfil;
      this.openModal();
    }, 800);
  }

  openModal() {
    this.mostrarPerfil = true;
  }

  closeModal() {
    this.mostrarPerfil = false;
  }

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  goToFeed() {
    this.router.navigate(['/feed']);
  }

  goToEdit() {
    this.router.navigate(['/perfil']);
  }

  goToConversas() {
    this.router.navigate(['/conversas']);
  }

  goToRegisterEvent() {
    this.router.navigate(['/evento']);
  }

  goToChat() {
    this.router.navigate(['/chat']);
  }

  exit() {
    this.router.navigate(['/']);
    this.onDestroy;
  }
}
