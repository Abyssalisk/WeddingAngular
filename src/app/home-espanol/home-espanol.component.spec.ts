import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEspanolComponent } from './home-espanol.component';

describe('HomeEspanolComponent', () => {
  let component: HomeEspanolComponent;
  let fixture: ComponentFixture<HomeEspanolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEspanolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEspanolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
