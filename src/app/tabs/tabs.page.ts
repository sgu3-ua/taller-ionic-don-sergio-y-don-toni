import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {

  constructor(private MenuController: MenuController) {}

  ionViewWillEnter() {
    this.MenuController.enable(true, 'principal');
  }

}
