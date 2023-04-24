import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditarPerfilService } from './editar-perfil.service';
import { Router } from '@angular/router';
import { BoraStore } from '../store/bora.store';
import { BaseBoraComponent } from '../shared/components/base-bora/base-bora.component';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss'],
})
export class EditarPerfilComponent extends BaseBoraComponent {
  form = new FormGroup({
    nome: new FormControl('', [
      Validators.pattern(/^[a-zA-Z\s]+$/),
      Validators.required,
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
    linkedin: new FormControl('', [Validators.required]),
    oldSenha: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Z])(?=.*\d)/),
    ]),
    senha: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Z])(?=.*\d)/),
    ]),
  });

  menuOpen = false;

  constructor(
    private editarService: EditarPerfilService,
    private router: Router,
    private boraStore: BoraStore
  ) {
    super();
  }

  ngOnInit(): void {
    console.log(this.boraStore.getIdUsuarioLogado());
  }

  putDadosUsuario() {
    const dadosAlteradosUsuario = {
      nome: this.form.controls.nome.value,
      email: this.form.controls.email.value,
      linkedin: this.form.controls.linkedin.value,
      oldSenha: this.form.controls.oldSenha.value,
      senha: this.form.controls.senha.value,
    };

    if (this.form.valid) {
      this.editarService.putDadosUsuarios(dadosAlteradosUsuario).subscribe(
        (success) => this.sucesso(),
        (error) => alert('Erro ao atualizar dados')
      );
    }
  }

  sucesso() {
    alert('Dados atualizados com sucesso');
    this.router.navigate(['/feed']);
    this.form.reset();
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

  exit() {
    this.router.navigate(['/']);
    this.onDestroy;
  }
}
