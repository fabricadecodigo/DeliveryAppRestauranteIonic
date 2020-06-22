import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessHourService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<IBusinessHourResponse[]>(`${environment.api}/businesshours/`).toPromise();
  }

  getById(id: string) {
    return this.httpClient.get<IBusinessHourResponse>(`${environment.api}/businesshours/${id}`).toPromise();
  }

  private getSaveBody(businessHour: IBusinessHourModel): IBusinessHourBody {
    const body: IBusinessHourBody = {
      dayOfWeek: businessHour.dayOfWeek,
      start: new Date(`01/01/1970 ${businessHour.start}`),
      end: new Date(`01/01/1970 ${businessHour.end}`)
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
}
