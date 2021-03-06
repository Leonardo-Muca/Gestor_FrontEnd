import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProyectoService } from '../service/proyectoService/proyecto.service';
import { TareaService } from '../service/tareaService/tarea.service';
import { UsuarioService } from '../service/usuarioService/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tareasEnProgreso: any;
  tareasFinalizadas: any;

  constructor(private stareas: TareaService,
    public susuarios: UsuarioService,
    public sproyectos: ProyectoService,
    private router: Router) { }

  ngOnInit(): void {
    this.obtenerTareasEnProgreso();
    this.obtenerTareasFinalizadas();
    this.susuarios.recuperarUsuarios();
    this.sproyectos.recuperarProyectos();
  }

  obtenerTareasEnProgreso() {
    this.stareas.recuperarTareasPendientes().then((res: any) => {
      this.tareasEnProgreso = res;
      console.log(res);

    }).catch(error => {
      Swal.fire({
        toast:true,
        title: 'Error al obtener Tareas',
        text: error,
        icon: 'error',
        confirmButtonText: 'Regresar',
        position: 'top-right',
        background:"#ffdfd4",
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    });
  };

  obtenerTareasFinalizadas() {
    this.stareas.recuperarTareasFinalizadas().then((res: any) => {
      this.tareasFinalizadas = res;
      console.log(res);

    }).catch(error => {
      Swal.fire({
        toast:true,
        title: 'Error al obtener Tareas',
        text: error,
        icon: 'error',
        position: 'top-right',
        background:"#ffdfd4",
        confirmButtonText: 'Regresar',
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    });
  };

  goProyectos() {
    this.router.navigate(['/proyectos']);
  };

}

