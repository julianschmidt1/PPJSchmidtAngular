import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  authService = inject(AuthService);
  router = inject(Router);

  logoff() {
    this.authService.logout();
    this.router.navigate(['login'], { replaceUrl: true })
  }
}
