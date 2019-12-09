import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../modelos/Usuario';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiConsumerService } from '../Servicios/api-consumer.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

   pwdPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,16}$"; 
   user:Usuario = new Usuario();
   isValidFormSubmitted = null;
   formGroupRegistro;
   
  constructor(private formBuilder:FormBuilder, private router:Router, private service:ApiConsumerService) { }

  ngOnInit() {
    if(window.localStorage.getItem("token") != null){
      this.router.navigate(["nueva"]);
    }
    this.iniciarFormularios();
  }

  iniciarFormularios() {
    this.formGroupRegistro = this.formBuilder.group({
      nit: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  registrar(){
    this.isValidFormSubmitted = false;
    if (this.formGroupRegistro.invalid) {
       return;
    }
    this.isValidFormSubmitted = true;
    let user: Usuario = this.formGroupRegistro.value;
    this.service.createUsuario(user)
    .subscribe(res=>{
      if(res.data){
        alert("Se registró correctamente.")
        this.router.navigate([""]);
      }else{
        alert(res.error);
      }
    },
    (error: any) => {
      alert("Error de conexión");
    })
  }

}
