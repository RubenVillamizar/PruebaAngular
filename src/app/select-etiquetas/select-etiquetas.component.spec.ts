import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEtiquetasComponent } from './select-etiquetas.component';

describe('SelectEtiquetasComponent', () => {
  let component: SelectEtiquetasComponent;
  let fixture: ComponentFixture<SelectEtiquetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectEtiquetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectEtiquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
