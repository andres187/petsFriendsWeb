import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { NuevoServicioComponent } from './nuevo-servicio/nuevo-servicio.component';
import { MisServiciosComponent } from './mis-servicios/mis-servicios.component';
import { LogoutComponent } from './logout/logout.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoComponent,
    NavbarComponent,
    RegistroUsuarioComponent,
    NuevoServicioComponent,
    MisServiciosComponent,
    LogoutComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
