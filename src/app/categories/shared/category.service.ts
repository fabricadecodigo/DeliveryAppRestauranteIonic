import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<ICategoryResponse[]>(`${environment.api}/categories/`).toPromise();
  }

  getById(id: string) {
    return this.httpClient.get<ICategoryResponse>(`${environment.api}/categories/${id}`).toPromise();
  }

  insert(category: ICategoryModel) {
    return this.httpClient.post<ICategoryResponse>(`${environment.api}/categories/`, category).toPromise();
  }

  update(id: string, category: ICategoryModel) {
    return this.httpClient.put<ICategoryResponse>(`${environment.api}/categories/${id}`, category).toPromise();
  }

  delete(id: string) {
    return this.httpClient.delete(`${environment.api}/categories/${id}`).toPromise();
  }
}
