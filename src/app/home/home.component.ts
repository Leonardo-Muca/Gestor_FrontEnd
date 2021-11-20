import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'
import { Usuario } from '../interfaces/usuario';
import { UsuarioService } from '../service/usuarioService/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: Usuario[] = []

  usuario: Usuario = {
    strNombre: '',
    strApellidos: '',
    strCorreo: '',
    strPassword: '',
    strTipoUsuario: '',
  };

  constructor(private susuarios: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.susuarios.recuperarusuarios().then((res: any) => {
      let msg: string = '';
      this.usuarios = res;
      console.log(res);

      if (res.length > 0) {
        msg = 'Se han obtenido los usuarios con exito';
      } else {
        msg = 'No hay usuarios existentes';
      }
      Swal.fire({
        title: 'Success',
        text: msg,
        icon: 'success',
        confirmButtonText: 'Regresar'
      })
    }).catch(error => {
      Swal.fire({
        title: 'Error al obtener usuarios',
        text: error,
        icon: 'error',
        confirmButtonText: 'Regresar'
      })
      console.log('Ha sucedido un error', error);
    });
  };

  altauser(forma: NgForm) {
    this.susuarios.altauser(this.usuario).then((res: any) => {
      Swal.fire({
        title: 'Success',
        text: 'Usuario registrado con exito',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
      forma.reset();
      this.ngOnInit();
      this.obtenerUsuarios();
    }).catch(error => {
      Swal.fire({
        title: 'Error al registrar usuario',
        text: error.error.message,
        icon: 'error',
        confirmButtonText: 'Regresar'
      })
      console.log(error.error.message);
    });
  }

}
