import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.css']
})
export class DetallePersonaComponent implements OnInit{
  
  selectedPersona : any;

  constructor(public personasService:PersonasService,
    private route:ActivatedRoute) {}

  ngOnInit():void{
    this.route.paramMap.subscribe( (paramMap:any) =>{
      const{params} =paramMap
      this.onSelect(params.id);
    })
  } 
  onSelect(id: number): void {
    this.selectedPersona = this.personasService.getDetalle(id).subscribe(data=>{
        this.selectedPersona = data;
      })
    }
}
