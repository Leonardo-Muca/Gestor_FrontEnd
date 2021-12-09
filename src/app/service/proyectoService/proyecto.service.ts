import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = environment.url + '/proyectos';
  proyectos: any

  constructor(private http: HttpClient) { }

  recuperarProyectos() {
    return this.http.get(this.url).subscribe((res: any)=>{
      this.proyectos = res;
    }, error => {
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

  altaProyecto(usuario: any) {
    return this.http.post(this.url, usuario).toPromise();
  }

  putProyecto(id: any, usuario: any) {
    return this.http.put(`${this.url}/${id}`, usuario).toPromise();
  }

  deleteProyecto(id: any) {
    return this.http.delete(`${this.url}/${id}`).toPromise();
  }
}
