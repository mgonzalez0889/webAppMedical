import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

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

  constructor() { }
}
