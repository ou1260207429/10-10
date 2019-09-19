import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EngineeringManagementFireDesignComponent } from './fire-design.component';

describe('EngineeringManagementFireDesignComponent', () => {
  let component: EngineeringManagementFireDesignComponent;
  let fixture: ComponentFixture<EngineeringManagementFireDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringManagementFireDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringManagementFireDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
