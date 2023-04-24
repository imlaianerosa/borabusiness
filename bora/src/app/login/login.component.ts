import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginGet } from './login';
import { BoraStore } from '../store/bora.store';
import { takeUntil } from 'rxjs';
import { BaseBoraComponent } from '../shared/components/base-bora/base-bora.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseBoraComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Z])(?=.*\d)/),
    ]),
  });

  submitted = false;
  idUsuario: any;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private boraStore: BoraStore
  ) {
    super();
  }

  ngOnInit(): void {}

  putAlteraSenha() {
    if (this.form.controls.email) {
      console.log('submit');
      this.loginService
        .putEsqueciMinhaSenha(this.form.controls.email.value)
        .subscribe(
          (success) =>
            alert(
              'E-mail de redefinição de senha enviado para ' +
                this.form.controls.email.value +
                '.'
            ),
          (error) => alert('Erro ao tentar redefinir senha :('),
          () => console.log('request completo')
        );
    }
  }

  postLogin() {
    this.loginService
      .getLogin(this.form.value)
      .subscribe((dados) => (this.idUsuario = dados));
    setTimeout(() => {
      this.boraStore.setIdUsuarioLogado(this.idUsuario);
      console.log(this.idUsuario)
      if (this.idUsuario) {
        this.goToFeed();
      } else {
        alert('Usuário ou senha incorreta');
      }
    }, 1000);
  }

  backBtn() {
    this.router.navigate(['/inicial']);
  }

  goToFeed() {
    this.router.navigate(['/feed']);
  }
}
