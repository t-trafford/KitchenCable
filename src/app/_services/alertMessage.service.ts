import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class AlertMessageService {
  constructor(private toastController: ToastController) {}

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message, // 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions(message: string) {
    const toast = await this.toastController.create({
      message: message, // 'Click to Close',
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Ok'
    });
    toast.present();
  }
}
