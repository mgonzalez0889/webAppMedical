import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cotizar-cirugias',
  templateUrl: './cotizar-cirugias.component.html',
  styleUrls: ['./cotizar-cirugias.component.css']
})
export class CotizarCirugiasComponent implements OnInit {
  listadoCirugia = [];
  cirugias = [
    {
      id: 1,
      nombre: 'Alergologia',
      valor: '$ 3,500,000'
    },
    {
      id: 2,
      nombre: 'Cirugia Cardica',
      valor: '$ 4,000,000'
    },
    {
      id: 3,
      nombre: 'Cirugia general',
      valor: '$ 3,000,000'
    },
    {
      id: 4,
      nombre: 'Cirugia de Mama',
      valor: '$ 3,000,000'
    },
    {
      id: 5,
      nombre: 'Cirugia maxilofacial',
      valor: '$ 3,000,000'
    },
    {
      id: 6,
      nombre: 'Cirugia vascular',
      valor: '$ 5,000,000'
    },
    {
      id: 7,
      nombre: 'Dermatologia',
      valor: '$ 6,000,000'
    },
    {
      id: 8,
      nombre: 'Endocrinologia y nutricion',
      valor: '$ 3,000,000'
    },
    {
      id: 9,
      nombre: 'Neumologia',
      valor: '$ 3,000,000'
    }
  ];


  constructor() {
    this.listadoCirugia = this.cirugias;
  }

  ngOnInit() {
  }

  cotizar() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Cotizacion realizada con exito',
      showConfirmButton: false,
      timer: 2500
    });
  }
}
