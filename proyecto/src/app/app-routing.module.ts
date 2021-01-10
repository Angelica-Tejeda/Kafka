import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { VistaLecturaComponent } from './components/shared/vista-lectura/vista-lectura.component';
import { VistaEscrituraComponent } from './components/shared/vista-escritor/vista-escritura.component';
import { FormlibroComponent } from './components/formlibro/formlibro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'homeLector',             component: HomeComponent },
  { path: 'homeEscritor',           component: HomeComponent },
  { path: 'vistaLectura',     component: VistaLecturaComponent },
  { path: 'vistaEscritura',     component: VistaEscrituraComponent },
  {path: 'formlibro', component: FormlibroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
