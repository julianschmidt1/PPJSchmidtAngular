import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CreateComponent } from './pages/create/create.component';
import { authGuard } from './guards/auth.guard';
import { ListComponent } from './pages/list/list.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: 'create', component: CreateComponent, canActivate: [authGuard] },
    { path: 'list', component: ListComponent, canActivate: [authGuard] },
    // { path: '**', redirectTo: 'login' },
    // canDeactivate: [(component: WelcomeComponent) => !component.prop],

];
