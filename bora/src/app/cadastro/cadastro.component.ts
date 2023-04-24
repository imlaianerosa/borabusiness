import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from './cadastro.service';
import { Usuarios } from './cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]+$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    linkedin: new FormControl('', Validators.required),
    senha: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Z])(?=.*\d)/),
    ]),
    fotoPerfil: new FormControl('', Validators.required),
  });

  submitted = false;
  base64: any;
  dadosUsuarios: Usuarios;
  idUsuario: any;

  constructor(
    private router: Router,
    private cadastroService: CadastroService
  ) {}

  ngOnInit(): void {}

  onInputChanged(event: any) {
    let targetEvent = event.target;
    let file: Blob = targetEvent.files[0];
    let fileReader: FileReader = new FileReader();

    fileReader.onload = (e) => {
      this.base64 = fileReader.result;
      console.log('the res ', this.base64);
    };
    fileReader.readAsDataURL(file);
  }

  postUser() {
    this.dadosUsuarios = {
      nome: this.form.controls.nome.value,
      email: this.form.controls.email.value,
      linkedin: this.form.controls.linkedin.value,
      senha: this.form.controls.senha.value,
      fotoPerfil: this.base64,
    };

    if (this.form.valid) {
      this.cadastroService.postUsuarios(this.dadosUsuarios).subscribe(
        (success) => this.router.navigate(['/login']),
        (error) => console.error(error)
      );
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  backBtn() {
    this.router.navigate(['/inicial']);
  }
}
