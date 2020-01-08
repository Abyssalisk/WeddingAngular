import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpEspanolComponent } from './rsvp-espanol.component';

describe('RsvpEspanolComponent', () => {
  let component: RsvpEspanolComponent;
  let fixture: ComponentFixture<RsvpEspanolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpEspanolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpEspanolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
