import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menu = [];
  constructor() { }

  ngOnInit() {
    this.menu = this.getMenu();
  }

  getMenu() {
    return [
      {
        descripcion: 'Solicitudes',
        link: '',
        child: true,
        childrens: [
          {
            descripcion: 'Agendar citas',
            link: '/pages/solicitudes/agendar-citas'
          },
          {
            descripcion: 'Consulta medicos especiales',
            link: '/pages/solicitudes/medicos-especialistas'
          },
          {
            descripcion: 'Cotizar cirugias',
            link: '/pages/solicitudes/cotizar-cirugias'
          },
          {
            descripcion: 'Medicos en casa',
            link: '/pages/solicitudes/medicos-encasa'
          }



        ]
      }



    ]



  }

}
