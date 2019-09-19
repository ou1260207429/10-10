import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EngineeringManagementCompletedAcceptanceComponent } from './completed-acceptance.component';

describe('EngineeringManagementCompletedAcceptanceComponent', () => {
  let component: EngineeringManagementCompletedAcceptanceComponent;
  let fixture: ComponentFixture<EngineeringManagementCompletedAcceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringManagementCompletedAcceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringManagementCompletedAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
