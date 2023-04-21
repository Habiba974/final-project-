import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTestsComponent } from './show-tests.component';

describe('ShowTestsComponent', () => {
  let component: ShowTestsComponent;
  let fixture: ComponentFixture<ShowTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
