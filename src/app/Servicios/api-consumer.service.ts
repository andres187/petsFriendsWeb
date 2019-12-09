import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../modelos/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {

  constructor(private http: HttpClient) { }

  login(credenciales:any){
    return this.http.post<any>(environment.apiUrl+"socio/login",credenciales)
  }

  createUsuario(usuario:Usuario){
    return this.http.post<any>(environment.apiUrl+'socio/crear',usuario);
  }

  getMisServicios(params: any = [], headers: any = []){
    //let token = JSON.parse(window.atob(localStorage.getItem("token").split('.')[1]));
    const token = window.localStorage.getItem("token");
    let paramHeaders =  new HttpHeaders().set('Content-Type', 'application/json');
    paramHeaders = paramHeaders.append('Authorization', 'Bearer ' + token);    
    let paramQuery = new HttpParams();
    headers.forEach(item => {
      paramHeaders = paramHeaders.append(item.campo, item.valor);
    });
    if (params === null) {
      params = [];
    }
    params.forEach(item => {
      paramQuery = paramQuery.append(item.campo, item.valor);
    });
    console.log(headers);
    return this.http.get<any>(environment.apiUrl+'serviciossocios/misservicios', { headers: paramHeaders, params: paramQuery });
  }

  getServicios(params: any = [], headers: any = []){
    //let token = JSON.parse(window.atob(localStorage.getItem("token").split('.')[1]));
    const token = window.localStorage.getItem("token");
    let paramHeaders =  new HttpHeaders().set('Content-Type', 'application/json');
    paramHeaders = paramHeaders.append('Authorization', 'Bearer ' + token);    
    let paramQuery = new HttpParams();
    headers.forEach(item => {
      paramHeaders = paramHeaders.append(item.campo, item.valor);
    });
    if (params === null) {
      params = [];
    }
    params.forEach(item => {
      paramQuery = paramQuery.append(item.campo, item.valor);
    });
    console.log(headers);
    return this.http.get<any>(environment.apiUrl+'servicios', { headers: paramHeaders, params: paramQuery });
  }

  createServicio(params: any, headers: any = []){
    //let token = JSON.parse(window.atob(localStorage.getItem("token").split('.')[1]));
    const token = window.localStorage.getItem("token");
    let paramHeaders =  new HttpHeaders().set('Authorization', 'Bearer ' + token);    
    headers.forEach(item => {
      paramHeaders = paramHeaders.append(item.campo, item.valor);
    });
    return this.http.post<any>(environment.apiUrl+'serviciosocio', params, { headers: paramHeaders });
  }
}
