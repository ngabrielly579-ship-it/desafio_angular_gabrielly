import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nome = '';
  senha = '';
  manterLogado = false;
  mensagem = '';
  carregando = false;

  constructor(private auth: AuthService, private router: Router) {}

  entrar(): void {
    this.mensagem = '';
    if (!this.nome.trim() || !this.senha.trim()) {
      this.mensagem = 'Preencha usuário e senha.';
      return;
    }

    this.carregando = true;
    this.auth.login(this.nome.trim(), this.senha).subscribe({
      next: usuario => {
        this.auth.salvarSessao(usuario, this.manterLogado);
        this.carregando = false;
        this.router.navigate(['/home']);
      },
      error: () => {
        this.carregando = false;
        this.mensagem = 'Usuário ou senha inválidos.';
      }
    });
  }
}
