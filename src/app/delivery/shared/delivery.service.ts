import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<IDeliveryResponse[]>(`${environment.api}/delivery/`).toPromise();
  }

  getById(id: string) {
    return this.httpClient.get<IDeliveryResponse>(`${environment.api}/delivery/${id}`).toPromise();
  }

  insert(delivery: IDeliveryModel) {
    return this.httpClient.post<IDeliveryResponse>(`${environment.api}/delivery/`, delivery).toPromise();
  }

  update(id: string, delivery: IDeliveryModel) {
    return this.httpClient.put<IDeliveryResponse>(`${environment.api}/delivery/${id}`, delivery).toPromise();
  }

  delete(id: string) {
    return this.httpClient.delete(`${environment.api}/delivery/${id}`).toPromise();
  }
}
