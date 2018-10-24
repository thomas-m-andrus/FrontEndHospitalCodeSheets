import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTemplate1Component } from './table-template-1.component';

describe('TableTemplate1Component', () => {
  let component: TableTemplate1Component;
  let fixture: ComponentFixture<TableTemplate1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTemplate1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTemplate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
