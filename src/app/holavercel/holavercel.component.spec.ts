import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolavercelComponent } from './holavercel.component';

describe('HolavercelComponent', () => {
  let component: HolavercelComponent;
  let fixture: ComponentFixture<HolavercelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolavercelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HolavercelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
