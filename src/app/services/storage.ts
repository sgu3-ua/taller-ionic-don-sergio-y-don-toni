import { Injectable } from '@angular/core';
import { Storage as IonicStorage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class Storage {

  initalized = false;

  constructor(private storage: IonicStorage) {
    console.log('Storage service constructor called');
    this.init();
  }

  async init() {
    console.log('Initializing storage...');
    await this.storage.create();
  }

  public set(key: string, value: any) {
    if (!this.initalized) {
      console.log("Storage not initialized, initializing now...");
      this.init();
    }
    console.log(`Setting key: ${key} with value:`, value);
    this.storage.set(key, value);
  }

  public get(key: string) {
    if (!this.initalized) {
      console.log("Storage not initialized, initializing now...");
      this.init();
    }
    console.log(`Getting value for key: ${key}`);
    return this.storage.get(key);
  }
}
