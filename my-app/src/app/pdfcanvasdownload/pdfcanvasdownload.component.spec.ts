import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfcanvasdownloadComponent } from './pdfcanvasdownload.component';

describe('PdfcanvasdownloadComponent', () => {
  let component: PdfcanvasdownloadComponent;
  let fixture: ComponentFixture<PdfcanvasdownloadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfcanvasdownloadComponent]
    });
    fixture = TestBed.createComponent(PdfcanvasdownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
