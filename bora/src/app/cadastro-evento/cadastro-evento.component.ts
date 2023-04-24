import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroEventoService } from './cadastro-evento.service';
import { BoraStore } from '../store/bora.store';
import { json } from 'body-parser';

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.scss'],
})
export class CadastroEventoComponent {
  form = new FormGroup({
    nomeEvento: new FormControl('', Validators.required),
    descricaoEvento: new FormControl('', Validators.required),
    localEvento: new FormControl('', Validators.required),
    dataEvento: new FormControl('', Validators.required),
  });

  idusuario: string;
  dadosEvento: any;

  constructor(
    private router: Router,
    private eventoService: CadastroEventoService,
    private store: BoraStore
  ) {}

  ngOnInit(): void {
    console.log(this.store.getIdUsuarioLogado());
  }

  postEvento() {
    this.dadosEvento = this.form.value;
    const teste = this.store.getIdUsuarioLogado();
    const postEvento = {
      nomeEvento: this.form.controls.nomeEvento.value,
      descricaoEvento: this.form.controls.descricaoEvento.value,
      localEvento: this.form.controls.localEvento.value,
      dataEvento: this.form.controls.dataEvento.value,
      idUsuario: this.store.getIdUsuarioLogado(),
    };
    console.log(postEvento);
    if (this.form.valid) {
      console.log('submit');
      this.eventoService.postEventos(postEvento).subscribe(
        (success) => alert('Evento cadastrado com sucesso!'),
        (error) =>
          alert('Erro ao cadastrar evento. Tente novamente mais tarde'),
        () => console.log('request completo')
      );
      setTimeout(() => {
        this.router.navigate(['/feed']);
      }, 2000);
    }
  }

  backBtn() {
    this.router.navigate(['/feed']);
  }

  goToFeed() {
    this.router.navigate(['/feed']);
  }
}
