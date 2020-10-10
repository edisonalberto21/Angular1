import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesdComponent } from './pipesd.component';

describe('PipesdComponent', () => {
  let component: PipesdComponent;
  let fixture: ComponentFixture<PipesdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
