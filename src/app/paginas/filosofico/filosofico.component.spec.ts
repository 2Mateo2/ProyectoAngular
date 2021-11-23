import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilosoficoComponent } from './filosofico.component';

describe('FilosoficoComponent', () => {
  let component: FilosoficoComponent;
  let fixture: ComponentFixture<FilosoficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilosoficoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilosoficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
