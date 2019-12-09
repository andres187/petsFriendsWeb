import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConsumerService } from '../Servicios/api-consumer.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private service:ApiConsumerService, public appComponent:AppComponent) { }

  ngOnInit() {
    if(window.localStorage.getItem("token") != null){
      this.appComponent.autenticado = true;
    }
  }

}
