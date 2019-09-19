import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkMattersAlreadyDoneComponent } from './already-done.component';

describe('WorkMattersAlreadyDoneComponent', () => {
  let component: WorkMattersAlreadyDoneComponent;
  let fixture: ComponentFixture<WorkMattersAlreadyDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkMattersAlreadyDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkMattersAlreadyDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
