import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSingleTestComponent } from './show-single-test.component';

describe('ShowSingleTestComponent', () => {
  let component: ShowSingleTestComponent;
  let fixture: ComponentFixture<ShowSingleTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSingleTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSingleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
