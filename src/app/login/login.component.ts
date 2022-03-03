import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;
  usuario = {
    email: null,
    password: null,
    tipo: null,
  }
  tipo: any;
  id: any

  constructor(private router: Router, private formBuilder: FormBuilder, private lservice: LoginService) { }

  ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //   email: ['', [Validators.required,]],
    //   password: ['', [Validators.required]],
    // });
  }

  login(usuario: any) {
    let memoria = 0;
    console.log(usuario)
    return this.lservice.login(usuario).then((res: any) => {
      console.log('token:', res.token);
      localStorage.setItem('token', res.token);
      this.tipo = res.usrDB.tipo;
      this.id = res.usrDB._id;

      localStorage.setItem('tipoDeUsuario', this.tipo);

      console.log(this.tipo);
      this.router.navigate(['/home'])
      Swal.fire({
        toast: true,
        title: 'Credenciales correctas',
        text: `Welcome ${this.usuario.email}`,
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
    }).catch(err => {
      console.log(err.error);
      Swal.fire({
        toast:true,
        title: 'Email o contraseña incorrecta',
        text: err.error.msg,
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
      memoria++;
      if (memoria == 3) {
        alert('Usuario bloqueado, intente dentro de 30 segundos');
      }
    })
  }

  register() {
    this.router.navigate(['/home'])
  }

}
