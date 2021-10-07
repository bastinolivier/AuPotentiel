import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCandidateComponent } from './liste-candidate.component';

describe('ListeCandidateComponent', () => {
  let component: ListeCandidateComponent;
  let fixture: ComponentFixture<ListeCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
