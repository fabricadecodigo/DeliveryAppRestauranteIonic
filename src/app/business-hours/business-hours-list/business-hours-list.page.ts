import { Component, OnInit } from '@angular/core';
import { AlertService } from './../../core/services/alert.service';
import { ToastService } from './../../core/services/toast.service';
import { BusinessHourService } from './../shared/business-hour.service';

@Component({
  selector: 'app-business-hours-list',
  templateUrl: './business-hours-list.page.html',
  styleUrls: ['./business-hours-list.page.scss'],
})
export class BusinessHoursListPage {
  businessHours: IBusinessHourResponse[] = [];

  constructor(
    private alert: AlertService,
    private toast: ToastService,
    private businessHourService: BusinessHourService
  ) { }

  ionViewDidEnter() {
    this.loadCategories();
  }

  async loadCategories() {
    this.businessHours = await this.businessHourService.getAll();
  }

  remove(businessHour: IBusinessHourResponse) {
    this.alert.showConfirmDelete(this.getDayOfWeekName(businessHour.dayOfWeek), () => this.executeRemove(businessHour));
  }

  private async executeRemove(businessHour: IBusinessHourResponse) {
    try {
      // chamar a api para remover
      await this.businessHourService.delete(businessHour._id);

      // Removendo da tela
      const index = this.businessHours.indexOf(businessHour);
      this.businessHours.splice(index, 1);

      this.toast.showSuccess('Horário de funcionamento removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o horário de funcionamento');
    }
  }

  getDayOfWeekName(value: number) {
    return this.businessHourService.getDayOfWeekName(value);
  }
}
