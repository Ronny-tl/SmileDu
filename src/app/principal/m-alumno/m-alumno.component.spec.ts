import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MAlumnoComponent } from './m-alumno.component';

describe('MAlumnoComponent', () => {
  let component: MAlumnoComponent;
  let fixture: ComponentFixture<MAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
