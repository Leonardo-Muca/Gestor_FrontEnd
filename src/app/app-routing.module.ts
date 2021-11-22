import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'proyectos', component: ProyectoComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
