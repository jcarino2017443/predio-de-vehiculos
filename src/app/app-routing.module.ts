import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticasComponent } from './componentes/Administrador/estadisticas/estadisticas.component';
import { ReportesComponent } from './componentes/Administrador/reportes/reportes.component';
import { UsuariosComponent } from './componentes/Administrador/usuarios/usuarios.component';
import { VehiculosComponent } from './componentes/Administrador/vehiculos/vehiculos.component';
import { VentasComponent } from './componentes/Administrador/ventas/ventas.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { PanelAdminComponent } from './componentes/panel-admin/panel-admin.component';
import { RegistroComponent } from './componentes/registro/registro.component';

import { RestrinccionService } from './servicios/restrinccion.service';

const routes: Routes = [
  
  {path: 'home', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component:LoginComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'panelAdmin', component: PanelAdminComponent},
  {path: 'estadisticas', component: EstadisticasComponent},
  {path: 'vehiculos', component: VehiculosComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'ventas', component: VentasComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: '**', component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
