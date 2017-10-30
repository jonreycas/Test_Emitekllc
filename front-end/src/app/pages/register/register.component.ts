import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import { RegisterService } from 'app/pages/register/register.service';
import { Usuario } from 'app/usuario';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {

  public form:FormGroup;
  public name:AbstractControl;
  public sexo:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;

  public submitted:boolean = false;
  results: any[] = [];
  msg_text: string = "";
  usuario: Usuario;


  constructor(fb:FormBuilder, private registerService:RegisterService) {

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'sexo': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.name = this.form.controls['name'];
    this.sexo = this.form.controls['sexo'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      console.log(values);
      
      let usuario= new Usuario(null, values['name'], values['email'],values['passwords']['password'],values['sexo'],null,null);	  
      this.registerService.postUsuario(usuario).subscribe(
        users => {
          this.usuario = users;
          console.error(this.usuario);
          this.msg_text = "Cuenta creada exitosamente";
        },
        error => {
          this.results = [];
          this.msg_text = "Error ya existe una cuenta con el correo digitado.";
          this.email.untouched;
          this.email.invalid;
          }
      )
    }

    
  }
}
