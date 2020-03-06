import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgendarCitasComponent} from './agendar-citas/agendar-citas.component';
import {CotizarCirugiasComponent} from './cotizar-cirugias/cotizar-cirugias.component';
import {MedicosEspecialesComponent} from './medicos-especiales/medicos-especiales.component';
import {MedicosEncasaComponent} from './medicos-encasa/medicos-encasa.component';


const routes: Routes = [

  {
    path: 'agendar-citas',
    component: AgendarCitasComponent
  },
  {
    path: 'cotizar-cirugias',
    component: CotizarCirugiasComponent
  },
  {
    path: 'medicos-especialistas',
    component: MedicosEspecialesComponent
  },
  {
    path: 'medicos-encasa',
    component: MedicosEncasaComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }
