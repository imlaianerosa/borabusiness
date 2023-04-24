import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from './chat.service';
import { BoraStore } from '../store/bora.store';
import { BaseBoraComponent } from '../shared/components/base-bora/base-bora.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent extends BaseBoraComponent {
  form = new FormGroup({
    mensagem: new FormControl('', Validators.required),
  });

  dataHora: Date = new Date();
  idUsuDestino: any;
  menuOpen = false;
  mensagem: any;
  messages: any[];
  newMessage: string;

  constructor(
    private router: Router,
    private chatService: ChatService,
    private store: BoraStore,
    private cd: ChangeDetectorRef 
  ) {
    super();
  }

  ngOnInit(): void {
    this.getMessages();

    this.chatService
      .getMessages()
      .subscribe((dados) => (this.mensagem = dados));
    setTimeout(() => {
      console.log(this.mensagem);
    }, 2000);
  }

  getMessages(): void {
    this.chatService.getMessages()
      .subscribe(messages => this.messages = messages);
      this.cd
  }

  sendMessage(): void {
    this.chatService.sendMessage(this.newMessage)
      .subscribe(() => {
        this.newMessage = '';
        this.getMessages();
      });
  }

  postMensagem() {
    this.idUsuDestino = this.store.getIdUsuarioEvento();
    const messageData = {
      mensagem: this.form.controls.mensagem.value,
      dataHoraEnvio: this.dataHora.toLocaleString(),
      idUsuDestino: this.idUsuDestino,
      idUsuario: this.store.getIdUsuarioLogado(),
    };
    if (this.form.valid) {
      this.chatService.sendMessage(messageData).subscribe(
        (success) => console.log('mensagem enviada'),
        (error) => console.error(error)
      );
      this.form.reset();
    }
  }

  goToChats() {
    this.router.navigate(['/conversas']);
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

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  exit() {
    this.router.navigate(['/']);
    this.onDestroy;
  }
}
