import { Component, Inject } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { defaultSettings } from './configurations/defaultSettings';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private localStorage: LocalStorageService, @Inject(DOCUMENT) private document: Document) {
    this.localStorage.storeToLocalStorage('userName', defaultSettings.defaultUserName);
    this.localStorage.storeToLocalStorage('theme', defaultSettings.defaultTheme);
    this.localStorage.storeToLocalStorage('clock', defaultSettings.defaultClock);
    this.localStorage.storeToLocalStorage('messageBehaviour', defaultSettings.defaultMessageOption);
    this.localStorage.storeToLocalStorage('language', defaultSettings.defaultLanguage);
    this.localStorage.readRecord('theme') === 'dark' ? this.document.body.classList.add('dark-theme') : this.document.body.classList.remove('dark-theme');
  }

}
