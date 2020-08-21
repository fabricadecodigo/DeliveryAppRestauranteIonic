import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from './../../core/services/toast.service';
import { AuthService } from './../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = {
    email: '',
    password: ''
  };

  validationText = {
    required: 'Campo obrigatório',
    email: 'E-mail inválido'
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: ToastService
  ) { }

  async onSubmit() {
    try {
      const result = await this.authService.login(this.user.email, this.user.password);
      if (result) {
        this.router.navigate(['']);
      } else {
        throw new Error('Ocorreu algum erro ao efetuar o login');
      }
    } catch (error) {
      this.toast.showError(error);
    }
  }

}
