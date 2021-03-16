import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { VistaLecturaComponent } from './components/shared/vista-lectura/vista-lectura.component';
import { VistaEscrituraComponent } from './components/shared/vista-escritor/vista-escritura.component';
import { FormlibroComponent } from './components/formlibro/formlibro.component';
import { CollectionComponent } from './components/collection/collection.component';
import { BusquedaComponent } from './components/shared/busqueda/busqueda.component';
import{ LoginComponent} from "./components/login/login.component";
import{RegisterComponent} from './components/register/register.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'homeLector',             component: HomeComponent },
  { path: 'homeEscritor',           component: HomeComponent },
  { path: 'vistaLectura',     component: VistaLecturaComponent },
  { path: ':vistaEscritura/:id',     component: VistaEscrituraComponent },
  {path: 'formlibro', component: FormlibroComponent },
  {path: 'coleccion',component: CollectionComponent},
  { path: 'busqueda', component: BusquedaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
