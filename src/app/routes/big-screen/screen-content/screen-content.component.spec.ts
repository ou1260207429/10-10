import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BigScreenScreenContentComponent } from './screen-content.component';

describe('BigScreenScreenContentComponent', () => {
  let component: BigScreenScreenContentComponent;
  let fixture: ComponentFixture<BigScreenScreenContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigScreenScreenContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigScreenScreenContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
