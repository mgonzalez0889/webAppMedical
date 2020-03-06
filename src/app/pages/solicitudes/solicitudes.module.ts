import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { AgendarCitasComponent } from './agendar-citas/agendar-citas.component';
import { MedicosEspecialesComponent } from './medicos-especiales/medicos-especiales.component';
import { MedicosEncasaComponent } from './medicos-encasa/medicos-encasa.component';
import { CotizarCirugiasComponent } from './cotizar-cirugias/cotizar-cirugias.component';


@NgModule({
  declarations: [AgendarCitasComponent, MedicosEspecialesComponent, MedicosEncasaComponent, CotizarCirugiasComponent],
  imports: [
    CommonModule,
    SolicitudesRoutingModule,
    FormsModule
  ]
})
export class SolicitudesModule { }
