import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TareaService } from '../service/tareaService/tarea.service';
import { UsuarioService } from '../service/usuarioService/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tareasEnProgreso: any;
  tareasFinalizadas: any;

  constructor(private stareas: TareaService, public susuarios: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerTareasEnProgreso();
    this.obtenerTareasFinalizadas();
    this.susuarios.recuperarUsuarios();
  }

  obtenerTareasEnProgreso() {
    this.stareas.recuperarTareasPendientes().then((res: any) => {
      this.tareasEnProgreso = res;
      console.log(res);
      
    }).catch(error => {
      Swal.fire({
        title: 'Error al obtener Tareas',
        text: error,
        icon: 'error',
        confirmButtonText: 'Regresar'
      })
    });
  };

  obtenerTareasFinalizadas() {
    this.stareas.recuperarTareasFinalizadas().then((res: any) => {
      this.tareasFinalizadas = res;
      console.log(res);
      
    }).catch(error => {
      Swal.fire({
        title: 'Error al obtener Tareas',
        text: error,
        icon: 'error',
        confirmButtonText: 'Regresar'
      })
    });
  };

}

