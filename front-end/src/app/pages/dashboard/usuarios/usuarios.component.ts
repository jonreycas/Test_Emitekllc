import {Component} from '@angular/core';
import {UsuariosService} from './usuarios.service';
import { Usuario } from 'app/usuario';

@Component({
  selector: 'usuarios',
  templateUrl: './Usuarios.html',
  styleUrls: ['./Usuarios.scss']
})
export class Usuarios {

  results: any[] = [];

  constructor(private usuarioService:UsuariosService) {
  }

  ngOnInit() {
    this._loadUsuarios();
  }

  expandMessage (message){
    message.expanded = !message.expanded;
  }

  private _loadUsuarios() {
    this.usuarioService.getusuarios2().subscribe(
      users => {
        this.results = users;
        console.error(this.results);
      },
      error => {
        this.results = [];
      }
    )
  }
}
