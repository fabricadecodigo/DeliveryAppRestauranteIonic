import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessHourService {

  public static DAYS_OF_WEEK = [
    { value: 0, text: 'Segunda Feira' },
    { value: 1, text: 'Terça Feira' },
    { value: 2, text: 'Quarta Feira' },
    { value: 3, text: 'Quinta Feira' },
    { value: 4, text: 'Sexta Feira' },
    { value: 5, text: 'Sábado' },
    { value: 6, text: 'Domingo' }
  ];

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<IBusinessHourResponse[]>(`${environment.api}/businesshours/`).toPromise();
  }

  getById(id: string) {
    return this.httpClient.get<IBusinessHourResponse>(`${environment.api}/businesshours/${id}`).toPromise();
  }

  private getDateFrom1970(value: string): Date {
    const date = new Date(value);
    date.setFullYear(1970);
    date.setMonth(0); // o mês no javascript vai de 0 a 11
    date.setDate(1);
    date.setSeconds(59);

    return date;
  }

  private getSaveBody(businessHour: IBusinessHourModel): IBusinessHourBody {
    const startDate = this.getDateFrom1970(businessHour.start);
    const endDate = this.getDateFrom1970(businessHour.end);

    const body: IBusinessHourBody = {
      dayOfWeek: businessHour.dayOfWeek,
      start: startDate,
      end: endDate
    };

    return body;
  }

  insert(businessHour: IBusinessHourModel) {
    const body = this.getSaveBody(businessHour);

    return this.httpClient.post<IBusinessHourResponse>(`${environment.api}/businesshours/`, body).toPromise();
  }

  update(id: string, businessHour: IBusinessHourModel) {
    const body = this.getSaveBody(businessHour);

    return this.httpClient.put<IBusinessHourResponse>(`${environment.api}/businesshours/${id}`, body).toPromise();
  }

  delete(id: string) {
    return this.httpClient.delete(`${environment.api}/businesshours/${id}`).toPromise();
  }

  getDayOfWeekName(value: number) {
    return BusinessHourService.DAYS_OF_WEEK.find(day => day.value === value).text;
  }
}
