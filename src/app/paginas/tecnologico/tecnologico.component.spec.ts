import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologicoComponent } from './tecnologico.component';

describe('TecnologicoComponent', () => {
  let component: TecnologicoComponent;
  let fixture: ComponentFixture<TecnologicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
