import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-pdfcanvasdownload',
  templateUrl: './pdfcanvasdownload.component.html',
  styleUrls: ['./pdfcanvasdownload.component.scss']
})
export class PdfcanvasdownloadComponent {
  downloadPageAsImage() {
    const element = document.body;
    html2canvas(element).then(canvas => {
      const link = document.createElement('a');
      link.download = 'page-screenshot.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  }

  downloadPageAsPDF() {
    // Show all textarea content in hidden divs for html2canvas
    const textareas = document.querySelectorAll('textarea');
    const hiddenDivs: HTMLElement[] = [];
    textareas.forEach((textarea, idx) => {
      const div = document.createElement('div');
      div.textContent = (textarea as HTMLTextAreaElement).value;
      div.style.position = 'absolute';
      div.style.left = '-9999px';
      div.style.whiteSpace = 'pre-wrap';
      div.style.width = (textarea as HTMLTextAreaElement).offsetWidth + 'px';
      div.style.height = 'auto';
      div.style.font = window.getComputedStyle(textarea).font;
      div.style.padding = window.getComputedStyle(textarea).padding;
      div.style.border = window.getComputedStyle(textarea).border;
      div.style.background = window.getComputedStyle(textarea).background;
      div.style.color = window.getComputedStyle(textarea).color;
      div.style.overflow = 'visible';
      div.style.boxSizing = 'border-box';
      div.className = 'textarea-print-replacement';
      textarea.parentElement?.insertBefore(div, textarea);
      textarea.style.display = 'none';
      hiddenDivs.push(div);
    });

    html2canvas(document.body).then(canvas => {
      // Restore textareas
      textareas.forEach((textarea, idx) => {
        textarea.style.display = '';
        hiddenDivs[idx].remove();
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
      const printWidth = imgWidth * ratio;
      const printHeight = imgHeight * ratio;
      const x = (pageWidth - printWidth) / 2;
      const y = (pageHeight - printHeight) / 2;
      pdf.addImage(imgData, 'PNG', x, y, printWidth, printHeight);
      pdf.save('page-screenshot.pdf');
    });
  }
}
