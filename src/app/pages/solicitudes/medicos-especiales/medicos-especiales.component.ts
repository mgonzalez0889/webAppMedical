import { Component, OnInit, OnChanges } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medicos-especiales',
  templateUrl: './medicos-especiales.component.html',
  styleUrls: ['./medicos-especiales.component.css']
})
export class MedicosEspecialesComponent implements OnInit, OnChanges {
  seleccionado = '';
  select = false;
  verseleccion = '';
  medicos = [
    {
      id: 1,
      nombre: 'Javier',
      apellidos: 'Wilches',
      especialidad: 'Cardiaca'
    },
    {
      id: 2,
      nombre: 'Miguel',
      apellidos: 'Barbosa',
      especialidad: 'Ortopedica'
    },
    {
      id: 3,
      nombre: 'Amanda',
      apellidos: 'Vargas',
      especialidad: 'Plastica'
    },
    {
      id: 4,
      nombre: 'Sara',
      apellidos: 'Hernandez',
      especialidad: 'Neurocirugia'
    }
  ];

  public listado = [];

  constructor() {
    this.listado = this.medicos;
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {



  }


  llenarTable() {
    this.select = true;
    this.verseleccion = this.seleccionado;
  }

  verHorarios() {

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Realizada con exito',
      showConfirmButton: false,
      timer: 2500
    });
  }
}
