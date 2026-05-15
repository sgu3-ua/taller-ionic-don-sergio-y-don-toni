import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { UserService } from '../services/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

  formLogin: any;
  loginError: string = '';
  error: string = '';

  get email() {
    return this.formLogin.get('email')!;
  }

  get password() {
    return this.formLogin.get('password')!;
  }

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });
  }

  submit() {
    this.loginError = '';
    this.error = '';
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      return;
    }

    const { email, password } = this.formLogin.value;
    const user = this.userService.login(email, password);
    if (user) {
      this.router.navigate(['/tabs/wiki']);
    } else {
      this.loginError = 'Credenciales incorrectas';
      this.error = this.loginError;
    }
  }

  doLogin() {
    const email = this.formLogin.get('email')?.value;
    const password = this.formLogin.get('password')?.value;

    const user = this.userService.login(email, password);
    if (user != null) {
      this.router.navigateByUrl('/tabs');
    } else {
      this.error = 'Error, credenciales incorrectas';
    }
  }
}
