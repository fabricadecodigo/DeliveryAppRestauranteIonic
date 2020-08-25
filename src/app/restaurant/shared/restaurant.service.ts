import { IResturantModel } from './irestaurant-model';
import { environment } from './../../../environments/environment';
import { IRestaurantResponse } from './irestaurant-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http.get<IRestaurantResponse>(`${environment.api}/restaurant`).toPromise();
  }

  save(restaurant: IResturantModel, id: string) {
    if (id) {
      return this.http.put<IRestaurantResponse>(`${environment.api}/restaurant/${id}`, restaurant).toPromise();
    } else {
      return this.http.post<IRestaurantResponse>(`${environment.api}/restaurant`, restaurant).toPromise();
    }
  }
}
