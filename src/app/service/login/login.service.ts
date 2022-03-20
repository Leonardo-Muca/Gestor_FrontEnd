import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.url + '/login';
  constructor(private http: HttpClient) { }

  login(usuario: any) {
    return this.http.post(this.url, usuario).toPromise();
  }
}
