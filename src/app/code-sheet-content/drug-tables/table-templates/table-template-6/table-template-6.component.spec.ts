import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTemplate6Component } from './table-template-6.component';

describe('TableTemplate6Component', () => {
  let component: TableTemplate6Component;
  let fixture: ComponentFixture<TableTemplate6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTemplate6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTemplate6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
