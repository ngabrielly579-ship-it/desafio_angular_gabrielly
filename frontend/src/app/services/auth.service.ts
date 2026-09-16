import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'http://localhost:3000';
  private chave = 'usuarioFord';

  constructor(private http: HttpClient) {}

  login(nome: string, senha: string): Observable<Usuario> {
    return this.http.post<any>(`${this.api}/login`, { nome, senha }).pipe(
      map(res => ({
        id: res.id,
        nome: res.nome,
        senha: '',
        email: res.email
      }))
    );
  }

  salvarSessao(usuario: Usuario, manterLogado: boolean): void {
    const dados = JSON.stringify(usuario);

    if (manterLogado) {
      localStorage.setItem(this.chave, dados);
      sessionStorage.removeItem(this.chave);
    } else {
      sessionStorage.setItem(this.chave, dados);
      localStorage.removeItem(this.chave);
    }
  }

  estaLogado(): boolean {
    return sessionStorage.getItem(this.chave) !== null || localStorage.getItem(this.chave) !== null;
  }

  sair(): void {
    sessionStorage.removeItem(this.chave);
    localStorage.removeItem(this.chave);
  }
}
