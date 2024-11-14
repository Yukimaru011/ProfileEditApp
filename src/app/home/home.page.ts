import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private alertController: AlertController) {}

  async presentCustomAlert() {
    try {
      const alert = await this.alertController.create({
        cssClass: 'custom-alert',
        message: `Data telah diperbarui`,
        buttons: [
          {
            text: 'Okay',
            cssClass: 'alert-button',
            handler: () => {
              console.log('Okay clicked');
            },
          },
        ],
      });

      await alert.present();
    } catch (error) {
      this.displayErrorAlert(error); // Penanganan error
    }
  }

  private async displayErrorAlert(error: any) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: error.message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
