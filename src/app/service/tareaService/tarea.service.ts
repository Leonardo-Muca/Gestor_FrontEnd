import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  url = environment.url + '/tareas';

  constructor(private http: HttpClient) { }

  recuperarTareas() {
    return this.http.get(this.url).toPromise();
  };

  altaTarea(usuario: any) {
    return this.http.post(this.url, usuario).toPromise();
  };

  putTarea(id: any, usuario: any) {
    return this.http.put(`${this.url}/${id}`, usuario).toPromise();
  };

  deleteTarea(id: any) {
    return this.http.delete(`${this.url}/${id}`).toPromise();
  };
};
