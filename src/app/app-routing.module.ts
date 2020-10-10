import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { PipesdComponent } from './pipesd/pipesd.component';
import { TitulosComponent } from './titulos/titulos.component';
import { AgregarUsuariosComponent } from './usuarios/agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',component:TitulosComponent
  },
  {
    path:'pipes',component:PipesdComponent
  },
  {
    path:'ejemplo',component:EjemploComponent
  },
  {
    path:'directivas',component:DirectivaComponent
  },
  {
    path:'usuarios',component: UsuariosComponent,children:[
      {
          path: 'agregar', component:AgregarUsuariosComponent
      },
      {
        path:'editar', component:EditarUsuariosComponent
      }
    ]

  },
  {
    path:'**',component: Pagina404Component

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
