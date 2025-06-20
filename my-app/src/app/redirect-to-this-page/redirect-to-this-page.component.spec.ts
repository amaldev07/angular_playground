import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectToThisPageComponent } from './redirect-to-this-page.component';

describe('RedirectToThisPageComponent', () => {
  let component: RedirectToThisPageComponent;
  let fixture: ComponentFixture<RedirectToThisPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedirectToThisPageComponent]
    });
    fixture = TestBed.createComponent(RedirectToThisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
