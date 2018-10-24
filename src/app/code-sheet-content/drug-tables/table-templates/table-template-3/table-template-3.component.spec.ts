import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTemplate3Component } from './table-template-3.component';

describe('TableTemplate3Component', () => {
  let component: TableTemplate3Component;
  let fixture: ComponentFixture<TableTemplate3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTemplate3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTemplate3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
