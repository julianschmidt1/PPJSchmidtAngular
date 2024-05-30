import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  // const auth = inject(Auth);
  // console.log(auth.currentUser)
  const storedUser = localStorage.getItem('loggedUser');


  if (!storedUser) {
    router.navigateByUrl('');
  }

  return Boolean(storedUser);
};
