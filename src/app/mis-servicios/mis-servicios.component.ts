import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio } from '../modelos/Servicio';
import { ApiConsumerService } from '../Servicios/api-consumer.service';

@Component({
  selector: 'app-mis-servicios',
  templateUrl: './mis-servicios.component.html',
  styleUrls: ['./mis-servicios.component.css']
})
export class MisServiciosComponent implements OnInit {

  cargando = false;
  servicio: Servicio[];
  resultado = false;

  constructor(private router: Router, private service: ApiConsumerService) { }

  ngOnInit() {
    if(window.localStorage.getItem("token") == null){
      this.router.navigate([""]);
    }
    this.consultar();
  }

  
  consultar(){
    this.cargando = true;
    this.service.getMisServicios()
    .subscribe(res=>{
      let response = res.data;
      if (response){
        this.servicio = response;
        this.cargando = false;
        this.resultado = true;
      }else{
        alert("No se encontraron resultados");
      }
    },
    (error: any)=>{
      this.cargando = false;
      alert("Error con el servicio");
    });
  }

}
