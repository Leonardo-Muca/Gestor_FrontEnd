import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Usuario } from '../interfaces/usuario';
import { UsuarioService } from '../service/usuarioService/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];

  usuario = {
    _id: null,
    email: null,
    nombre: null,
    password: null,
    tipo: null,
  };

  constructor(public susuarios: UsuarioService) { }

  ngOnInit(): void {
    this.susuarios.recuperarUsuarios();
  }

  altauser(forma: NgForm) {
    if (this.usuario._id == undefined) {
      this.susuarios.altaUser(this.usuario).then((res: any) => {
        Swal.fire({
          toast:true,
          title: 'Success',
          text: 'Usuario registrado con exito',
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
          title: 'Error al registrar usuario',
          text: error.error.message,
          icon: 'error',
          confirmButtonText: 'Regresar',
          position: 'top-right',
          background:"#ffdfd4",
          timer: 3000,
          showConfirmButton: false,
          timerProgressBar: true,
          
          didOpen: (toast) => {
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
      });
    } else {
       this.susuarios.putUser(this.usuario._id, this.usuario).then((res: any) => {
        Swal.fire({
          toast:true,
          title: 'Success',
          text: `Usuario modificado con el id: ${this.usuario._id} con exito`,
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
        this.ngOnInit();
      }).catch(error => {
        Swal.fire({
          toast:true,
          title: 'Error al modificar usuario',
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
        });
      });
    }
  }

  deleteuser(id?: number, nombre?:string) {
    this.susuarios.deleteUser(id).then((res: any) => {
      Swal.fire({
        toast:true,
        title: 'Success',
        text: `Usuario ${nombre} eliminado con exito`,
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
      this.ngOnInit();
    }).catch(error => {
      Swal.fire({
        toast:true,
        title: 'Error al eliminar usuario',
        text: error.error.message,
        icon: 'error',
        confirmButtonText: 'Regresar',
        background:"#ffdfd4",
        
      })
    });
  }

  seleccionar(usuario: any) {
    this.usuario = usuario
  }

}
