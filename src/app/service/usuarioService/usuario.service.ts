import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Usuario[] = [];
  url = environment.url + '/usuarios';

  constructor(private http: HttpClient) { }

  recuperarUsuarios() {
    return this.http.get(this.url).subscribe((res: any)=>{
      this.usuarios = res;
    }, error => {
      Swal.fire({
        title: 'Error al obtener usuarios',
        text: error,
        icon: 'error',
        confirmButtonText: 'Regresar'
      })
      console.log('Ha sucedido un error', error);
    });
  };

  altaUser(usuario: any) {
    return this.http.post(this.url, usuario).toPromise();
  }

  putUser(id: any, usuario: any) {
    return this.http.put(`${this.url}/${id}`, usuario).toPromise();
  }

  deleteUser(id: any) {
    return this.http.delete(`${this.url}/${id}`).toPromise();
  }
}
