import { Component } from '@angular/core';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent {
  pers: any;
  selectedPersona: any;
 
  constructor(public personasService:PersonasService) {}
  
  ngOnInit() { 
    this.personasService.get().subscribe(data=>{
    this.pers = data;

  });
  }
  onSelect(id: number): void {
   
    this.selectedPersona = this.personasService.getDetalle(id).subscribe(data=>{
        this.selectedPersona = data;
      })
    }


}
