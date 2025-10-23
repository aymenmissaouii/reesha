import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {
    this.init();
  }

    async init() {
    try {
      // optional: draw webview under the status bar (content extends to the top)
      await StatusBar.setOverlaysWebView({ overlay: true });
      // hide it
      await StatusBar.hide();
      // optional styling if you ever show it again
      await StatusBar.setStyle({ style: Style.Dark }); // or Style.Light
    } catch (e) {
      console.warn('StatusBar not available', e);
    }
  }
}
