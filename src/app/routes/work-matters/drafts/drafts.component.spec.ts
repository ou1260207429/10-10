import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkMattersDraftsComponent } from './drafts.component';

describe('WorkMattersDraftsComponent', () => {
  let component: WorkMattersDraftsComponent;
  let fixture: ComponentFixture<WorkMattersDraftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkMattersDraftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkMattersDraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
