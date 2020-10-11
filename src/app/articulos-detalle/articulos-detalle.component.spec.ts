import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosDetalleComponent } from './articulos-detalle.component';

describe('ArticulosDetalleComponent', () => {
  let component: ArticulosDetalleComponent;
  let fixture: ComponentFixture<ArticulosDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
