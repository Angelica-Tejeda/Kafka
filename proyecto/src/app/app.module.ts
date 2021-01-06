import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SideBarComponent } from './components/shared/vista-lectura/side-bar/side-bar.component';
import { ToolBarComponent } from './components/shared/vista-lectura/tool-bar/tool-bar.component';
import { TextViewEditorComponent } from './components/shared/vista-lectura/text-view-editor/text-view-editor.component';
import { VistaLecturaComponent } from './components/shared/vista-lectura/vista-lectura.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SideBarComponent,
    ToolBarComponent,
    TextViewEditorComponent,
    VistaLecturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
