import { Component, OnInit } from '@angular/core';
import { AppiserviceService } from './appiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tareasEquipo: any[] = [];
  tarea = {
    id:null,
    nombre: "",
    completado: false
  }

  constructor( private appService: AppiserviceService){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.appService.getAll()
    .subscribe((data:any) => this.tareasEquipo = data);
  }

  save(){

    if (this.tarea.id){
      this.appService.update(this.tarea.id!, this.tarea).subscribe(()=>this.getAll());
    } else {
      this.appService.create(this.tarea).subscribe(()=>this.getAll());
    }


    this.tarea = {
      id:null,
      nombre: "",
      completado: false
    }
  }

  edit(tarea:any){
    this.tarea = {
      ...tarea
    };
  }

  delete(tarea:any){
    this.appService.delete(tarea.id).subscribe(()=>this.getAll());
  }
}
