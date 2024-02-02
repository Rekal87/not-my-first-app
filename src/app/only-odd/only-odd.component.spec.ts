import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyOddComponent } from './only-odd.component';

describe('OnlyOddComponent', () => {
  let component: OnlyOddComponent;
  let fixture: ComponentFixture<OnlyOddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlyOddComponent]
    });
    fixture = TestBed.createComponent(OnlyOddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
