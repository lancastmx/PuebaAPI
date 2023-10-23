import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ProductosUsuariosComponent } from './componentes/productos-usuarios/productos-usuarios.component';


const routes: Routes = [
  {path: '', component: UsuariosComponent},
  {path: 'productos-usuarios', component:ProductosUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
