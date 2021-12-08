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

<<<<<<< HEAD
  obtenerProyectos() {
    this.sproyectos.recuperarProyectos().then((res: any) => {
      this.proyectos = res;
    }).catch(error => {
      Swal.fire({
        toast:true,
        title: 'Error al obtener Proyectos',
        text: error,
        icon: 'error',
        confirmButtonText: 'Regresar',
        position: 'top-right',
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }        
      })
      console.log('Ha sucedido un error', error);
    });
  };

=======
>>>>>>> b736b60f5edf336d97846fbd16a0f240cb6412dd
  altaProyecto(forma: NgForm) {
    if (this.proyecto._id == undefined) {
      this.sproyectos.altaProyecto(this.proyecto).then((res: any) => {
        Swal.fire({
          title: 'Success',
          text: 'Proyecto registrado con exito',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          position: 'top-right',
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
        })
        forma.reset();
        this.ngOnInit();
      }).catch(error => {
        Swal.fire({
          title: 'Error al registrar el proyecto',
          text: error.error.message,
          icon: 'error',
          confirmButtonText: 'Regresar',
          position: 'top-right',
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
        })
      });
    } else {
      this.sproyectos.putProyecto(this.proyecto._id, this.proyecto).then((res: any) => {
        Swal.fire({
          title: 'Success',
          text: `Proyecto modificado con el id: ${this.proyecto._id} con exito`,
          icon: 'success',
          confirmButtonText: 'Aceptar',
          position: 'top-right',
        timer: 3000,
        showConfirmButton: true,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
        })
        this.ngOnInit();
      }).catch(error => {
        Swal.fire({
          title: 'Error al modificar el proyecto',
          text: error.error.message,
          icon: 'error',
          confirmButtonText: 'Regresar',
          position: 'top-right',
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
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
        confirmButtonText: 'Regresar',
        background:"#ffdfd4",
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
        
        didOpen: (toast) => {
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    });
  }

  seleccionar(proyecto: any) {
    this.proyecto = proyecto;
  }

}
