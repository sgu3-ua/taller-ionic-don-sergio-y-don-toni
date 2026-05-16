import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {

  readonly menuFile: string = "../assets/data/menu.json";
  menuOptions: any[] = [];


  constructor(private toastController: ToastController) {
    this.presentWelcomeToast
  }

  async presentWelcomeToast() {
    const toast = await this.toastController.create({
      message: 'Welcome to the Star Wars Wiki App!',
      duration: 2500,
      position: 'top',
      color: 'primary'
    });
    await toast.present();
  }
  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    fetch(this.menuFile)
      .then(response => response.json())
      .then(data => {
        this.menuOptions = data;
        console.log("Menu options loaded:", this.menuOptions);
      });
  }

}