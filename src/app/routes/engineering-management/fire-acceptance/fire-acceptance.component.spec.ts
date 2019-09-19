import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EngineeringManagementFireAcceptanceComponent } from './fire-acceptance.component';

describe('EngineeringManagementFireAcceptanceComponent', () => {
  let component: EngineeringManagementFireAcceptanceComponent;
  let fixture: ComponentFixture<EngineeringManagementFireAcceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringManagementFireAcceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringManagementFireAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
