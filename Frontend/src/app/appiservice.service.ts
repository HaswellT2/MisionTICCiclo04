import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const Api_Base = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AppiserviceService {

  constructor(private http : HttpClient) {}

  getAll(){
    return this.http.get(`${Api_Base}Tareas`);
  }

  create(tareaEquipo: any){
    return this.http.post(`${Api_Base}Tareas`, tareaEquipo);
  }

  update(id: string, tareaEquipo: any){
    return this.http.put(`${Api_Base}Tareas/${id}`, tareaEquipo);
  }

  delete(id: string){
    return this.http.delete(`${Api_Base}Tareas/${id}`);
  }
}
