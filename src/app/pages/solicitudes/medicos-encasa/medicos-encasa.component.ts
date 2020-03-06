import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";

@Component({
  selector: 'app-medicos-encasa',
  templateUrl: './medicos-encasa.component.html',
  styleUrls: ['./medicos-encasa.component.css']
})
export class MedicosEncasaComponent implements OnInit {
  domiclios = [];
  enCasa = [
    {
      id: 1,
      nombre: 'Simon',
      apellidos: 'ferrer',
      especialidad: 'General'
    },
    {
      id: 2,
      nombre: 'Martina',
      apellidos: 'Galvis',
      especialidad: 'Oftalmologa'
    },
    {
      id: 3,
      nombre: 'Martina',
      apellidos: 'Galvis',
      especialidad: 'Urgencia'
    },
    {
      id: 4,
      nombre: 'Manuel',
      apellidos: 'Antequera',
      especialidad: 'Cardiaca'
    },



  ];




  constructor() {
    this.domiclios = this.enCasa;
  }

  ngOnInit() {
  }

  solicitar() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Solicitud realizada con exito',
      showConfirmButton: false,
      timer: 2500
    });
  }

}
