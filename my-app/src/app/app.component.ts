import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  yourIFrameUrl: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer) {
    this.yourIFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/YOUR_VIDEO_CODE');
  }

  getSourceURL() {
    this.yourIFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/YOUR_VIDEO_CODE');
  }
}
