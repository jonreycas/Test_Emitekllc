import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { PopularApp } from './popularApp';
import { PieChart } from './pieChart';
import { TrafficChart } from './trafficChart';
import { UsersMap } from './usersMap';
import { LineChart } from './lineChart';
import { Feed } from './feed';
import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';
import { FeedService } from './feed/feed.service';
import { LineChartService } from './lineChart/lineChart.service';
import { PieChartService } from './pieChart/pieChart.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import { UsersMapService } from './usersMap/usersMap.service';
import { Favoritos } from 'app/pages/dashboard/favoritos';
import { FavoritosService } from 'app/pages/dashboard/favoritos/favoritos.service';
import { UsuariosService } from 'app/pages/dashboard/usuarios/usuarios.service';
import { Usuarios } from 'app/pages/dashboard/usuarios/usuarios.component';

import { Notas } from 'app/pages/dashboard/notas';
import { NotasService } from 'app/pages/dashboard/notas/notas.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [
    PopularApp,
    PieChart,
    TrafficChart,
    UsersMap,
    LineChart,
    Feed,
    Notas,
    Calendar,
    Dashboard,
    Favoritos,
    Usuarios
  ],
  providers: [
    CalendarService,
    FeedService,
    LineChartService,
    PieChartService,
    NotasService,
    TrafficChartService,
    UsersMapService,
    FavoritosService,
    UsuariosService
  ]
})
export class DashboardModule {}
