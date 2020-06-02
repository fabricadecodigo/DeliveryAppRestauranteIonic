import { ToastService } from './../../core/services/toast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-hours-edit',
  templateUrl: './business-hours-edit.page.html',
  styleUrls: ['./business-hours-edit.page.scss'],
})
export class BusinessHoursEditPage implements OnInit {
  title = 'Novo horário de funcionamento';

  daysOfWeek: any[] = [
    'Segunda Feira',
    'Terça Feira',
    'Quarta Feira',
    'Quinta Feira',
    'Sexta Feira',
    'Sábado',
    'Domingo'
  ];

  businessHourModel = {
    dayOfWeek: '',
    start: null,
    end: null
  };

  constructor(
    private toast: ToastService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    try {
      // chamar a api
      this.toast.showSuccess('Local de entrega cadastrado com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao cadastrar o local de entrega');
    }
  }
}
