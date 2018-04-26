import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlogbisComponent } from './vlogbis.component';

describe('VlogbisComponent', () => {
  let component: VlogbisComponent;
  let fixture: ComponentFixture<VlogbisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlogbisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlogbisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
