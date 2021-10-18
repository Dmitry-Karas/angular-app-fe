import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/services/auth.service';

import * as authActions from '../../store/auth/auth.actions';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store
  ) {}

  authForm: FormGroup;
  isSubmitted = false;

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.authForm.invalid) {
      return;
    }

    this.store.dispatch(authActions.login(this.authForm.value));
    // window.localStorage.setItem('token', 'token');
    this.router.navigate(['home']);
    this.authForm.reset();
  }

  login() {
    this.isSubmitted = true;

    if (this.authForm.invalid) {
      return;
    }

    this.authService.login(this.authForm.value);
    this.router.navigateByUrl('/home');
  }
}
