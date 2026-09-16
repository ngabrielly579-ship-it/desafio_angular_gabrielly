import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuAberto = false;

  constructor(private auth: AuthService, private router: Router) {}

  logout(): void {
    this.auth.sair();
    this.router.navigate(['/login']);
  }
}
