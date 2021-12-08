import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'
import { Tarea } from '../interfaces/tarea';
import { TareaService } from '../service/tareaService/tarea.service';
import { UsuarioService } from '../service/usuarioService/usuario.service';
import { ProyectoService } from '../service/proyectoService/proyecto.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas: Tarea[] = [];

  tarea = {
    _id: null,
    idProyecto: null,
    strNombre: null,
    strStatus: null,
    strDescripcion: null,
    dteFechaInicio: null,
    dteFechaEntrega: null,
    arrAdministrador: { idUsuario: null },
    arrDesarrollador: { idUsuario: null },
    arrTester: { idUsuario: null },
  };

  constructor(private stareas: TareaService, public susuarios: UsuarioService, public sproyectos: ProyectoService) { }

  ngOnInit(): void {
    this.obtenerTareas();
    this.susuarios.recuperarUsuarios();
    this.sproyectos.recuperarProyectos();
  }

  obtenerTareas() {
    this.stareas.recuperarTareas().then((res: any) => {
      this.tareas = res;
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

  altaTarea(forma: NgForm) {
    if (this.tarea._id == undefined) {
      this.stareas.altaTarea(this.tarea).then((res: any) => {
        Swal.fire({
          title: 'Success',
          text: 'Tarea registrado con exito',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })
        forma.reset();
        this.ngOnInit();
      }).catch(error => {
        Swal.fire({
          title: 'Error al registrar Tarea',
          text: error.error.message,
          icon: 'error',
          confirmButtonText: 'Regresar'
        })
      });
    } else {
      this.stareas.putTarea(this.tarea._id, this.tarea).then((res: any) => {
        Swal.fire({
          title: 'Success',
          text: `Tarea modificado con el id: ${this.tarea._id} con exito`,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })
        this.ngOnInit();
      }).catch(error => {
        Swal.fire({
          title: 'Error al modificar Tarea',
          text: error.error.message,
          icon: 'error',
          confirmButtonText: 'Regresar',


        });
      });
    }
  }

  deleteTarea(id?: number, nombre?: string) {
    this.stareas.deleteTarea(id).then((res: any) => {
      Swal.fire({
        title: 'Success',
        text: `Tarea ${nombre} eliminada con exito`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
      this.ngOnInit();
      this.obtenerTareas();
    }).catch(error => {
      Swal.fire({
        title: 'Error al eliminar Tarea',
        text: error.error.message,
        icon: 'error',
        confirmButtonText: 'Regresar'
      })
    });
  }

  seleccionar(tarea: any) {
    this.tarea = tarea
  }

}
