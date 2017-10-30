import {Component} from '@angular/core';

import {FavoritosService} from './favoritos.service';
import { Usuario } from 'app/usuario';

@Component({
  selector: 'favoritos',
  templateUrl: './favoritos.html',
  styleUrls: ['./favoritos.scss']
})
export class Favoritos {

  results: any[] = [];

  constructor(private favoritoService:FavoritosService) {
  }

  ngOnInit() {
    this._loadFavoritos();
  }

  expandMessage (message){
    message.expanded = !message.expanded;
  }

  private _loadFavoritos() {
    this.favoritoService.getusuarios().subscribe(
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
