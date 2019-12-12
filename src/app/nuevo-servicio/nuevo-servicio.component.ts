import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio } from '../modelos/Servicio';
import { ApiConsumerService } from '../Servicios/api-consumer.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-servicio',
  templateUrl: './nuevo-servicio.component.html',
  styleUrls: ['./nuevo-servicio.component.css']
})
export class NuevoServicioComponent implements OnInit {
  cargando = false;
  formGroupServicio;
  servicio: Servicio;
  serviciosData: Servicio[];
  servicioId: 0;

  constructor(private formBuilder: FormBuilder,private router: Router, private service: ApiConsumerService) { }

  ngOnInit() {
    if(window.localStorage.getItem("token") == null){
      this.router.navigate([""]);
    }
    this.servicios();
    this.iniciarFormularios();
  }

  iniciarFormularios() {
    this.formGroupServicio = this.formBuilder.group({
      titulo: ['', Validators.compose([Validators.required])],
      servicioId: ['', Validators.compose([Validators.required])]
    });
  }

  servicios(){
    this.cargando = true;
    this.service.getServicios()
    .subscribe(res=>{
      let response = res.data;
      if (response){
        this.serviciosData = response;
        this.cargando = false;
      }else{
        alert("No se encontraron resultados.");
      }
    },
    (error: any)=>{
      this.cargando = false;
      alert("Error con el servicio");
    });
  }

  crear(){
      this.servicio = new Servicio();
      this.servicio['titulo'] = this.formGroupServicio.value.titulo;
      this.servicio['servicioId'] = this.formGroupServicio.value.servicioId;
      this.servicio['userId'] = window.localStorage.getItem('id');
      this.cargando = true;
      console.log(this.servicio)
      this.service.createServicio(this.servicio)
      .subscribe(res=>{
        if (res.data){
          let servicioGuardado = new Servicio();
          servicioGuardado = res.data;
          this.router.navigate(["servicios"]);
        }else{
        this.cargando = false;
        alert("Error al procesar su solicitud");
        }
      })    
  }

}
