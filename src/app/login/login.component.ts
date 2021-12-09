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
    if (this.email === '190041@utags.edu.mx' && this.password === '12345') {
      Swal.fire({
        toast: true,
        title: 'Credenciales correctas',
        text: `Welcome ${this.email}`,
        icon: 'success',
        position: 'top-right',
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      this.router.navigate(['/home'])
    } else {
      Swal.fire({
        title: 'Credenciales incorrectas',
        text: 'Introduce credenciales registradas',
        icon: 'error',
        confirmButtonText: 'Regresar',
        background:"#ffdfd4",
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
        
        didOpen: (toast) => {
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    }
  }

}
