import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { LoginService } from './login.service';
import { SessionService } from 'app/session.service';
@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  results: any[] = [];
  error_text: string = "";

  constructor(fb:FormBuilder, private loginService:LoginService,public session:SessionService,private router:Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
      this.loginService.getUsuarioCorreo(values['email']).subscribe(
        users => {
          this.results = users;
        },
        error => {
          this.results = [];
          this.error_text = "Error en las credenciales de acceso.";
          }
      )
      if(this.results){
        console.error(this.results);
        if(this.results['clave']==this.password){
          this.session.setLoggedIn(true);
          this.session.setId(this.results['id']);
          this.router.navigate['dashboard'];
        }else{
          this.error_text = "Contraseña erronea"
        }
        
      }
    }
  }
}
