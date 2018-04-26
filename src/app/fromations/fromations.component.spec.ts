import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromationsComponent } from './fromations.component';

describe('FromationsComponent', () => {
  let component: FromationsComponent;
  let fixture: ComponentFixture<FromationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
