import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = environment.url + '/usuarios';

  constructor(private http: HttpClient) { }

  recuperarusuarios() {
    return this.http.get(this.url).toPromise();
  }
}
