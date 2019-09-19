import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EngineeringManagementDraftsComponent } from './drafts.component';

describe('EngineeringManagementDraftsComponent', () => {
  let component: EngineeringManagementDraftsComponent;
  let fixture: ComponentFixture<EngineeringManagementDraftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringManagementDraftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringManagementDraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
