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
    strNombre: null,
    strApellidos: null,
    strCorreo: null,
    strPassword: null,
    strTipoUsuario: null,
  };

  constructor(public susuarios: UsuarioService) { }

  ngOnInit(): void {
    this.susuarios.recuperarUsuarios();
  }

  altauser(forma: NgForm) {
    if (this.usuario._id == undefined) {
      this.susuarios.altaUser(this.usuario).then((res: any) => {
        Swal.fire({
          title: 'Success',
          text: 'Usuario registrado con exito',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })
        forma.reset();
        this.ngOnInit();
      }).catch(error => {
        Swal.fire({
          title: 'Error al registrar usuario',
          text: error.error.message,
          icon: 'error',
          confirmButtonText: 'Regresar'
        })
      });
    } else {
       this.susuarios.putUser(this.usuario._id, this.usuario).then((res: any) => {
        Swal.fire({
          title: 'Success',
          text: `Usuario modificado con el id: ${this.usuario._id} con exito`,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })
        this.ngOnInit();
      }).catch(error => {
        Swal.fire({
          title: 'Error al modificar usuario',
          text: error.error.message,
          icon: 'error',
          confirmButtonText: 'Regresar'
        });
      });
    }
  }

  deleteuser(id?: number) {
    this.susuarios.deleteUser(id).then((res: any) => {
      Swal.fire({
        title: 'Success',
        text: `Usuario eliminado con el id: ${id} con exito`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
      this.ngOnInit();
    }).catch(error => {
      Swal.fire({
        title: 'Error al eliminar usuario',
        text: error.error.message,
        icon: 'error',
        confirmButtonText: 'Regresar'
      })
    });
  }

  seleccionar(usuario: any) {
    this.usuario = usuario
  }

}
