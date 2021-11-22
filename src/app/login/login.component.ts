import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.email === 'leonardo' && this.password === '12345') {
      Swal.fire({
        title: 'Credenciales correctas',
        text: `Welcome ${this.email}`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
      this.router.navigate(['/home'])
    } else {
      Swal.fire({
        title: 'Credenciales incorrectas',
        text: 'Introduce credenciales registradas',
        icon: 'error',
        confirmButtonText: 'Regresar'
      })
    }
  }

}
