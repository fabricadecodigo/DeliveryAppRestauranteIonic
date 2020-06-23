import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from './../../core/services/toast.service';
import { BusinessHourService } from './../shared/business-hour.service';

@Component({
  selector: 'app-business-hours-edit',
  templateUrl: './business-hours-edit.page.html',
  styleUrls: ['./business-hours-edit.page.scss'],
})
export class BusinessHoursEditPage implements OnInit {
  title = 'Novo horário de funcionamento';

  daysOfWeek: any[] = BusinessHourService.DAYS_OF_WEEK;

  businessHourModel: IBusinessHourModel = {
    dayOfWeek: null,
    start: null,
    end: null
  };

  id: string;

  constructor(
    private toast: ToastService,
    private businessHourService: BusinessHourService,
    private location: Location,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.loadBusinessHour(this.id);
    }
  }

  async loadBusinessHour(id: string) {
    try {
      const businessHour = await this.businessHourService.getById(id);
      this.businessHourModel = {
        dayOfWeek: businessHour.dayOfWeek,
        start: businessHour.start.toLocaleString(),
        end: businessHour.end.toLocaleString()
      };
    } catch (error) {
      console.error(error);
      this.toast.showError('Ocorreu algum erro ao tentar recuperar o horário de funcionamento.');
    }
  }

  async onSubmit() {
    try {
      // chamar a api
      let result: IBusinessHourResponse;
      if (this.id) {
        result = await this.businessHourService.update(this.id, this.businessHourModel);
      } else {
        result = await this.businessHourService.insert(this.businessHourModel);
      }

      if (result) {
        console.log(result);
        this.toast.showSuccess('Horário de funcionamento cadastrado com sucesso');
        this.location.back();
      }
    } catch (error) {
      console.error(error);
      this.toast.showError('Erro ao cadastrar o horário de funcionamento');
    }
  }
}
