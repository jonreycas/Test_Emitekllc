import {Component} from '@angular/core';
import { SessionService } from 'app/session.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  constructor(public session:SessionService) {
  }

}
