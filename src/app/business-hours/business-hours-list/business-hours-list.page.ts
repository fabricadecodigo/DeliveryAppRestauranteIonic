import { Component, OnInit } from '@angular/core';
import { ToastService } from './../../core/services/toast.service';
import { AlertService } from './../../core/services/alert.service';

@Component({
  selector: 'app-business-hours-list',
  templateUrl: './business-hours-list.page.html',
  styleUrls: ['./business-hours-list.page.scss'],
})
export class BusinessHoursListPage implements OnInit {
  businessHours: any[] = [];

  constructor(
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.businessHours.push({
      day: 'Terça Feira',
      start: '18:00',
      end: '00:00'
    });

    this.businessHours.push({
      day: 'Quarta Feira',
      start: '18:00',
      end: '00:00'
    });

    this.businessHours.push({
      day: 'Quinta Feira',
      start: '18:00',
      end: '00:00'
    });

    this.businessHours.push({
      day: 'Sexta Feira',
      start: '18:00',
      end: '02:00'
    });

    this.businessHours.push({
      day: 'Sábado',
      start: '18:00',
      end: '02:00'
    });

    this.businessHours.push({
      day: 'Domingo',
      start: '18:00',
      end: '01:00'
    });
  }

  remove(businessHour: any) {
    this.alert.showConfirmDelete(businessHour.day, () => this.executeRemove(businessHour));
  }

  private executeRemove(businessHour: any) {
    try {
      // chamar a api para remover

      // Removendo da tela
      const index = this.businessHours.indexOf(businessHour);
      this.businessHours.splice(index, 1);

      this.toast.showSuccess('Horário de funcionamento removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o horário de funcionamento');
    }
  }
}
