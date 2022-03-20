import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Para trabajar con formularios
import { FormsModule } from '@angular/forms';
// Para trabajar con formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { TareasComponent } from './tareas/tareas.component';
import { PasswordPipe } from './pipes/password.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';




const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'proyectos', component: ProyectoComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ProyectoComponent,
    UsuarioComponent,
    NotificacionesComponent,
    TareasComponent,
    PasswordPipe,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
