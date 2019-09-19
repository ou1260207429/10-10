import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkMattersAgencyDoneComponent } from './agency-done.component';

describe('WorkMattersAgencyDoneComponent', () => {
  let component: WorkMattersAgencyDoneComponent;
  let fixture: ComponentFixture<WorkMattersAgencyDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkMattersAgencyDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkMattersAgencyDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
