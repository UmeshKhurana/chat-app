import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  // Check for local storage support
  private isLocalStorageSupported = (): boolean => !!window.localStorage;
  constructor() { }

  // Create a record value
  private createRecord = (key: string, value: string): { error?: string } | void => {
    if (!key || !value) { return { error: 'Store to Local Storage failed.' }; }
    localStorage.setItem(key, value);
  };

  // Read a record value
  public readRecord = (key: string): string | null => {
    return localStorage.getItem(key);
  };

  // Override value of existing record
  public updateRecord = (key: string, value: string): { error?: string } | void => {
    if (!key || !value) { return { error: 'Store to Local Storage failed.' }; }
    localStorage.setItem(key, value);
  };

  // Store record to local storage if not created
  public storeToLocalStorage = (key: string, value: string): void => {
    if (this.isLocalStorageSupported()) {
      if (!this.readRecord(key)) {
        this.createRecord(key, value);
      }
    }
  }; 
}
