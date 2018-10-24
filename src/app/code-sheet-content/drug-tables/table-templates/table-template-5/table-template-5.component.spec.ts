import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTemplate5Component } from './table-template-5.component';

describe('TableTemplate5Component', () => {
  let component: TableTemplate5Component;
  let fixture: ComponentFixture<TableTemplate5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTemplate5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTemplate5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
