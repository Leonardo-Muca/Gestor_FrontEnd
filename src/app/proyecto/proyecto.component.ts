import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'
import { Proyecto } from '../interfaces/proyecto';
import { ProyectoService } from '../service/proyectoService/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyecto = {
    _id: null,
    strNombreProyecto: null,
    strStatus: null,
    strDescripcion: null,
    dteFechaInicio: null,
    dteFechaEntrega: null,
  };

  constructor(public sproyectos: ProyectoService) { }

  ngOnInit(): void {
    this.sproyectos.recuperarProyectos();
  }

  altaProyecto(forma: NgForm) {
    if (this.proyecto._id == undefined) {
      this.sproyectos.altaProyecto(this.proyecto).then((res: any) => {
        Swal.fire({
          title: 'Success',
          text: 'Proyecto registrado con exito',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })
        forma.reset();
        this.ngOnInit();
      }).catch(error => {
        Swal.fire({
          title: 'Error al registrar el proyecto',
          text: error.error.message,
          icon: 'error',
          confirmButtonText: 'Regresar'
        })
      });
    } else {
      this.sproyectos.putProyecto(this.proyecto._id, this.proyecto).then((res: any) => {
        Swal.fire({
          title: 'Success',
          text: `Proyecto modificado con el id: ${this.proyecto._id} con exito`,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })
        this.ngOnInit();
      }).catch(error => {
        Swal.fire({
          title: 'Error al modificar el proyecto',
          text: error.error.message,
          icon: 'error',
          confirmButtonText: 'Regresar'
        });
      });
    }
  }

  deleteProyecto(id?: number, nombre?: string) {
    this.sproyectos.deleteProyecto(id).then((res: any) => {
      Swal.fire({
        title: 'Success',
        text: `Proyecto ${nombre} eliminado con exito`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
      this.ngOnInit();
    }).catch(error => {
      Swal.fire({
        title: 'Error al eliminar el proyecto',
        text: error.error.message,
        icon: 'error',
        confirmButtonText: 'Regresar'
      })
    });
  }

  seleccionar(proyecto: any) {
    this.proyecto = proyecto;
  }

}
