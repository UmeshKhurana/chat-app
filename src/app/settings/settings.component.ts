import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalStorageService } from '../services/local-storage.service';
import { DOCUMENT } from '@angular/platform-browser';
import { defaultSettings } from './../configurations/defaultSettings';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  // encapsulation:ViewEncapsulation.None

})
export class SettingsComponent implements OnInit {

  options: FormGroup;

  constructor(private fb: FormBuilder, private localStorage: LocalStorageService, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.getLocalSetting();
  }

  private getLocalSetting() {
    this.options = this.fb.group({
      userName: this.localStorage.readRecord('userName'),
      theme: this.localStorage.readRecord('theme'),
      clock: this.localStorage.readRecord('clock'),
      messageBehaviour: this.localStorage.readRecord('messageBehaviour'),
      language: this.localStorage.readRecord('language'),
    });
  }
  private updateSettings(attr) {
    this.localStorage.updateRecord(attr, this.options.controls[attr].value);
    (attr === 'theme') ? this.applyTheme(attr) : null
  }
  private resetSettings() {
    this.localStorage.updateRecord('userName', defaultSettings.defaultUserName);
    this.localStorage.updateRecord('theme', defaultSettings.defaultTheme);
    this.localStorage.updateRecord('clock', defaultSettings.defaultClock);
    this.localStorage.updateRecord('messageBehaviour', defaultSettings.defaultMessageOption);
    this.localStorage.updateRecord('language', defaultSettings.defaultLanguage);
    this.getLocalSetting();
    this.applyTheme('theme');
  }
  private applyTheme(attr) {
    let selectedTheme = this.options.controls[attr].value;
    selectedTheme === 'dark' ? this.document.body.classList.add('dark-theme') : this.document.body.classList.remove('dark-theme');
  }
}
