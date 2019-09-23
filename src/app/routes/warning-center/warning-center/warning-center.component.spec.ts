import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WarningCenterWarningCenterComponent } from './warning-center.component';

describe('WarningCenterWarningCenterComponent', () => {
  let component: WarningCenterWarningCenterComponent;
  let fixture: ComponentFixture<WarningCenterWarningCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningCenterWarningCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningCenterWarningCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
