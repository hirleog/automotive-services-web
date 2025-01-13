import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WppBtnComponent } from './wpp-btn.component';

describe('WppBtnComponent', () => {
  let component: WppBtnComponent;
  let fixture: ComponentFixture<WppBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WppBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WppBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
