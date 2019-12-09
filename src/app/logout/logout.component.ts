import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, public appComponent: AppComponent) { }

  ngOnInit() {
    this.Logout();
  }

  Logout(){
    window.localStorage.removeItem("token");
    this.appComponent.autenticado = false;
    this.router.navigate(['']);
  }

}
