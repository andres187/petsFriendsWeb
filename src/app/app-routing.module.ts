import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { NuevoServicioComponent } from './nuevo-servicio/nuevo-servicio.component';
import { MisServiciosComponent } from './mis-servicios/mis-servicios.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'registro', component:RegistroUsuarioComponent},
  {path: 'nueva', component:NuevoServicioComponent},
  {path: 'servicios', component:MisServiciosComponent},
  {path: 'logout', component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
