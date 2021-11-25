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

proyectos: Proyecto[] = [];

proyecto = {
  _id: null,
  strNombreProyecto: null,
  strStatus: null,
  strDescripcion: null,
  dteFechaInicio: null,
  dteFechaEntrega: null,
};

  constructor(private sproyectos: ProyectoService) { }

  ngOnInit(): void {
    this.obtenerProyectos();
  }

  obtenerProyectos() {
    this.sproyectos.recuperarProyectos().then((res: any) => {
      let msg: string = '';
      this.proyectos = res;
      console.log(res);

      if (res.length > 0) {
        msg = 'Se han obtenido los Proyectos con exito';
      } else {
        msg = 'No hay Proyectos existentes';
      }
      Swal.fire({
        title: 'Success',
        text: msg,
        icon: 'success',
        confirmButtonText: 'Regresar'
      })
    }).catch(error => {
      Swal.fire({
        title: 'Error al obtener Proyectos',
        text: error,
        icon: 'error',
        confirmButtonText: 'Regresar'
      })
      console.log('Ha sucedido un error', error);
    });
  };

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

  deleteProyecto(id?: number) {
    this.sproyectos.deleteProyecto(id).then((res: any) => {
      Swal.fire({
        title: 'Success',
        text: `Proyecto eliminado con el id: ${id} con exito`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
      this.ngOnInit();
      this.obtenerProyectos();
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
