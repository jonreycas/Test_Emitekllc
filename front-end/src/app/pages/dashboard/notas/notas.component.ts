import {Component} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';

import {NotasService} from './notas.service';
import { Nota } from 'app/nota';
import { SessionService } from 'app/session.service';

@Component({
  selector: 'notas',
  templateUrl: './notas.html',
  styleUrls: ['./notas.scss']
})
export class Notas {

  public dashboardColors = this._baConfig.get().colors.dashboard;

  public notasList:Array<any>;
  public newnotasText:string = '';

  results: any[] = [];

  constructor(private _baConfig:BaThemeConfigProvider, private notasService:NotasService, public session:SessionService) {
    
  }

  
  ngOnInit() {
    this._loadNotas();
  }


  private _loadNotas() {
    this.notasService.getNotas().subscribe(
      users => {
        this.results = users;
        console.error(this.results);
      },
      error => {
        this.results = [];
      }
    )
  }

  getNotDeleted() {
    return this.results;
  }

  addnotasItem($event) {
    console.log($event);

      let nota= new Nota(null, this.newnotasText, this.newnotasText,this.session.getId(),null,null);	  
      console.log(nota);
      this.notasService.postNota(nota).subscribe(
        users => {
          console.error(this.results);
          this._loadNotas();
        },
        error => {
          this.results = [];
          }
      )

  }

  private _getRandomColor() {
    let colors = Object.keys(this.dashboardColors).map(key => this.dashboardColors[key]);

    var i = Math.floor(Math.random() * (colors.length - 1));
    return colors[i];
  }
}
