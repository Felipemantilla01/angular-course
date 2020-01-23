import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDetilsComponent } from './department-detils.component';

describe('DepartmentDetilsComponent', () => {
  let component: DepartmentDetilsComponent;
  let fixture: ComponentFixture<DepartmentDetilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentDetilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
