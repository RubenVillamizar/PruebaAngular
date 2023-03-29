import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { SelectEtiquetasComponent } from './select-etiquetas/select-etiquetas.component';



const routes: Routes = [
  {path: '', component: ListaPersonasComponent},
  {path: 'detallePersona/:id', component: DetallePersonaComponent},
  {path: 'etiquetas', component: SelectEtiquetasComponent},
  {path: '**', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
