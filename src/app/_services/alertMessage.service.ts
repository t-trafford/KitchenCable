import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class AlertMessageService {
  constructor(private toastController: ToastController) {}

  async presentToast(message: string, color?: string) {
    const opt: any = {
      message: message, // 'Your settings have been saved.',
      duration: 2000,
      // color: 'success'
    };
    if (color) {
      opt.color = color; // danger
    }
    const toast = await this.toastController.create(opt);
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
