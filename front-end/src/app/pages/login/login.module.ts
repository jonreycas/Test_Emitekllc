import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { HttpModule } from '@angular/http';

import { Login } from './login.component';
import { routing }       from './login.routing';
import { LoginService } from 'app/pages/login/login.service';
import { SessionService } from 'app/session.service';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Login
  ],
  providers: [ 
    LoginService,
    SessionService
  ]
})
export class LoginModule {}
