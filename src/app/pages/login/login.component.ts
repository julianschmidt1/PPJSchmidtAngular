import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RoleModel } from '../../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public loginForm: FormGroup;
  private currentRole: number;
  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const username = this.formControls['username'].value;
      const password = this.formControls['password'].value;
      if (this.authService.login(username, password, this.currentRole)) {
        this.router.navigateByUrl('home');

      }
    } else {

      this.loginForm.markAllAsTouched();
    }
  }

  setAdminCredentials(): void {
    this.userControl.setValue('admin@mail.com');
    this.passwordControl.setValue('admin123');
    this.currentRole = RoleModel.Administrator;
  }

  setRegularCredentials(): void {
    this.userControl.setValue('user@mail.com');
    this.passwordControl.setValue('user123');
    this.currentRole = RoleModel.User;
  }

  get userControl() {
    return this.loginForm.controls['username'];
  }

  get passwordControl() {
    return this.loginForm.controls['password'];
  }

  get formControls() {
    return this.loginForm.controls;
  }

}
