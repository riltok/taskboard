import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingColumnComponent } from './adding-column.component';

describe('AddingColumnComponent', () => {
  let component: AddingColumnComponent;
  let fixture: ComponentFixture<AddingColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
