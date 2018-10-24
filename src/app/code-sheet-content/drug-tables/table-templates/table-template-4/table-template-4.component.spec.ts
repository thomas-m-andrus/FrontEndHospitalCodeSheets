import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTemplate4Component } from './table-template-4.component';

describe('TableTemplate4Component', () => {
  let component: TableTemplate4Component;
  let fixture: ComponentFixture<TableTemplate4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTemplate4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTemplate4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
