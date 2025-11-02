import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header *ngIf="authService.isAuthenticated()" class="app-header">
      <nav>
        <div class="logo">Gestão de Projetos</div>
        <div class="user-info">
          <span>Usuário: {{ authService.getLoggedUserEmail() }}</span>
          <button (click)="logout()">Sair</button> </div>
      </nav>
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly authService = inject(AuthService);

  logout(): void {
    this.authService.logout();
  }
}