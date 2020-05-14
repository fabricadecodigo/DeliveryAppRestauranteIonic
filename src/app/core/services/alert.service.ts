import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alert: AlertController) { }

  async showConfirmDelete(name: string, actionRemove: () => void) {
    const alertResult = await this.alert.create({
      header: 'Deletar?',
      message: `Deseja excluir o item: ${name}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Remover',
          handler: () => {
            actionRemove();
          }
        }
      ]
    });

    alertResult.present();
  }
}
