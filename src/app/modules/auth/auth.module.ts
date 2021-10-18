import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AngularMaterialModule } from '../../angular-material.module';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent, AuthFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
