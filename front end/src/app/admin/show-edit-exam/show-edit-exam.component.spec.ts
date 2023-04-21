import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEditExamComponent } from './show-edit-exam.component';

describe('ShowEditExamComponent', () => {
  let component: ShowEditExamComponent;
  let fixture: ComponentFixture<ShowEditExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEditExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowEditExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
