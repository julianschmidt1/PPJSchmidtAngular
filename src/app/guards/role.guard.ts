import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { CanActivateFn, Router } from '@angular/router';
import { RoleModel } from '../models/user.model';

export const roleGuard: CanActivateFn = () => {
  const router = inject(Router);
  const storedUser = localStorage.getItem('loggedUser');


  if (storedUser) {
    const userRole = JSON.parse(storedUser).role;
    
    if(userRole === RoleModel.Administrator){
        return true
    } else {
        router.navigateByUrl('home');
    }
  }

  return false;
};
