import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule  } from '@angular/forms';

/*RUTAS*/
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TemplateComponent } from './shared/template/template.component';
import { ContenidoComponent } from './shared/contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TemplateComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
