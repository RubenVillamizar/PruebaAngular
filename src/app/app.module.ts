import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{PersonasService} from './personas.service';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { SelectEtiquetasComponent } from './select-etiquetas/select-etiquetas.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    DetallePersonaComponent,
    SelectEtiquetasComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NgSelectModule,
    FormsModule,
  ],
  providers: [PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
