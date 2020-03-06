import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TemplateComponent} from './shared/template/template.component';

const routes: Routes = [
   {
     path: 'pages',
     component: TemplateComponent,
     children: [
      {
        path: 'solicitudes',
        loadChildren: () => import('./pages/solicitudes/solicitudes.module').then(m => m.SolicitudesModule)
      }

     ]

   },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/pages'
  }
  /*
  {
    path: 'pages',
    component: TemplateComponent,
    children: [
      {
        path: 'administracion',
        loadChildren: () => import('./pages/administracion/administracion.module').then(m => m.AdministracionModule)
      }
    ]

  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'pages',
    component: TemplateComponent,
    children: [
      {
        path: 'biblioteca',
        loadChildren: () => import('./pages/biblioteca/biblioteca.module').then(m => m.BibliotecaModule)
      }
  ]
},
  {
    path: 'pages',
    component: TemplateComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: '**',
      children: [
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },*/






];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
