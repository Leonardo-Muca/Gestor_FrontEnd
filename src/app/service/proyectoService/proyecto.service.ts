import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = environment.url + '/proyectos';

  constructor(private http: HttpClient) { }

  recuperarProyectos() {
    return this.http.get(this.url).toPromise();
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
