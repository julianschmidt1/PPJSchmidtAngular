import { Injectable, inject } from '@angular/core';
import { RoleModel, UserModel } from '../models/user.model';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth = inject(Auth);

  login(email: string, password: string, role: number): boolean {
    signInWithEmailAndPassword(this._auth, email, password)
      .then(loggedUser => {
        localStorage.setItem('loggedUser', JSON.stringify({ ...loggedUser.user, role: role }));
      })
      .catch(e => {
        console.log(e);
        let error = '';
        switch (e.code) {
          case 'auth/invalid-email':
            error = 'El correo ingresado no es valido.'
            break;
          case "auth/email-already-in-use":
            error = 'El correo ingresado ya fue registrado.'
            break;
          case "auth/weak-password":
            error = 'La contraseña debe tener por lo menos 6 caracteres.'
            break;
          default:
            error = 'Ocurrio un error.';
            break;
        }
        alert(error);
        return false
      })
    
    return true;
  }

  logout(): void {
    localStorage.removeItem('loggedUser');
  }

  getLoggedUser(): UserModel {
    return JSON.parse(localStorage.getItem('loggedUser') || JSON.stringify({}));
  }


}

