import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;
  email: string = '';
  password: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required,]],
      password : ['', [Validators.required]],
    });
  }

  login() {
    if (this.email === 'usuario' && this.password === '12345') {
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
      localStorage.setItem('tipoDeUsuario', 'usuario');
      this.router.navigate(['/home'])
    }
    if (this.email === 'administrador' && this.password === '12345') {
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
      localStorage.setItem('tipoDeUsuario', 'administrador');
      this.router.navigate(['/home'])
    }
  }

  register() {
    this.router.navigate(['/home'])
  }

}
