import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Platform } from '@ionic/angular';
// Capacitor App API (optional). If not installed, fallback logic below handles it.
import { App as CapacitorApp } from '@capacitor/app';

@Component({
  selector: 'app-exit',
  templateUrl: 'exit.page.html',
  styleUrls: ['exit.page.scss'],
  standalone: false,
})
export class exitPage {

  constructor(private location: Location, private platform: Platform) {}

  exitApp() {

    // Cordova
    if (navigator && (navigator as any).app && (navigator as any).app.exitApp) {
      (navigator as any).app.exitApp();
      return;
    }

    //Capacitor
    try {
      if (this.platform.is('android') && CapacitorApp && (CapacitorApp as any).exitApp) {
        (CapacitorApp as any).exitApp();
        return;
      }
    } catch (e) {

    }
    
    // Browser
    try {
      window.close();
    } catch (e) {
      console.warn('No se pudo cerrar la ventana desde el navegador', e);
    }
  }

  cancelExit() {
    // Vuelve a la página anterior
    this.location.back();
  }

}
