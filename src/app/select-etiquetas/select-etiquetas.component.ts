import { Component, OnInit } from '@angular/core';
import { EtiquetasService } from '../etiquetas.service';



@Component({
  selector: 'app-select-etiquetas',
  templateUrl: './select-etiquetas.component.html',
  styleUrls: ['./select-etiquetas.component.css']
})


export class SelectEtiquetasComponent  implements OnInit{

  tags: any;
  tagLevels: any;
  currentLevel = 1;
  selectagUno: any;
  nextLevel:any;
  previousLevels : any;
  level: { [key: string]: any[] } = {};


  constructor(public etiquetasService:EtiquetasService) {}
  ngOnInit() { 
    this.etiquetasService.get().subscribe(data=>{
    this.tags = Object.values(data);
  });
}

onSelect(selectedTagId: number): void {
  this.etiquetasService.getEtiquetas(selectedTagId, this.currentLevel, this.previousLevels).subscribe(
    data => {
      this.tagLevels = data.tags_by_level;
    });
    console.log(this.tagLevels);
}

/*selectTag(tagId: string): void {
  this.currentLevel++;
  this.previousLevels = this.previousLevels ? `${this.previousLevels},${tagId}` : tagId;
  this.onSelect();
}*/
}
