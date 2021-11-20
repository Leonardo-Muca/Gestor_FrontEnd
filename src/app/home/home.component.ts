import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Usuario } from '../interfaces/usuario';
import { UsuarioService } from '../service/usuarioService/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: any
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
        text: error.mesagge,
        icon: 'error',
        confirmButtonText: 'Regresar'
      })
      console.log('Ha sucedido un error', error.mesagge);
    });
  };

}
