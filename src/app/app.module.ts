import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormlibroComponent} from './components/formlibro/formlibro.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { VistaLecturaComponent } from './components/shared/vista-lectura/vista-lectura.component';
import { VistaEscrituraComponent } from './components/shared/vista-escritor/vista-escritura.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    VistaLecturaComponent,
    VistaEscrituraComponent,
    FormlibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
