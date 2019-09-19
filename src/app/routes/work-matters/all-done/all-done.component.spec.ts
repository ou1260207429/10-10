import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkMattersAllDoneComponent } from './all-done.component';

describe('WorkMattersAllDoneComponent', () => {
  let component: WorkMattersAllDoneComponent;
  let fixture: ComponentFixture<WorkMattersAllDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkMattersAllDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkMattersAllDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
