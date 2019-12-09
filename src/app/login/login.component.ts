import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/Usuario';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiConsumerService } from '../Servicios/api-consumer.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:Usuario = new Usuario();
  credenciales={};
  OK_STATUS = 'ok';
  user_Id: string;
  cargando = false;

  formGroupUsuarioLogin;
  constructor(private formBuilder: FormBuilder, private router:Router, private service:ApiConsumerService, public appComponent: AppComponent) { }

  ngOnInit() {
    if(window.localStorage.getItem("token") != null){
      this.router.navigate(["nueva"]);
    }
    this.iniciarFormularios();
  }

  iniciarFormularios() {
    this.formGroupUsuarioLogin = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  storeSecurityToken(token, nombre, id){
    window.localStorage.setItem ("token", token);
    window.localStorage.setItem ("userName",nombre);
    window.localStorage.setItem ("id",id);
  }

  login(){
    this.credenciales['email'] = this.formGroupUsuarioLogin.value.email;
    this.credenciales['password'] = this.formGroupUsuarioLogin.value.password;
    this.cargando = true;
    this.service.login(this.credenciales)
    .subscribe(res=>{
      let response = res.data;
      if (response){
         this.user_Id = response.user_Id;
        if (response.token!= null){
          this.appComponent.autenticado = true;
          this.storeSecurityToken(response.token, response.userName, response.user_Id);
          this.cargando = false;
          console.log(response.token + ' ' + response.userName + '' + response.user_Id)
          this.router.navigate(["nueva"]);
        }
      }else{
        this.cargando = false;
        alert(res.error);
      }
    },
    (error: any) => {
      alert("Error de conexión");
    })
  }

}
