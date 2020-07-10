import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<ICardapioListResponse[]>(`${environment.api}/cardapio/`).toPromise();
  }

  getById(id: string) {
    return this.httpClient.get<ICardapioResponse>(`${environment.api}/cardapio/${id}`).toPromise();
  }

  private getFormData(cardapio: ICardapioModel, photo: Blob) {
    const formData = new FormData();
    formData.append('category', cardapio.category);
    formData.append('name', cardapio.name);
    formData.append('price', cardapio.price.toString());
    formData.append('description', cardapio.description);
    if (photo) {
      formData.append('file', photo);
    }

    return formData;
  }

  insert(cardapio: ICardapioModel, photo: Blob) {
    const formData = this.getFormData(cardapio, photo);

    return this.httpClient.post<ICardapioResponse>(`${environment.api}/cardapio/`, formData).toPromise();
  }

  update(id: string, cardapio: ICardapioModel, photo: Blob) {
    const formData = this.getFormData(cardapio, photo);

    return this.httpClient.put<ICardapioResponse>(`${environment.api}/cardapio/${id}`, formData).toPromise();
  }

  delete(id: string) {
    return this.httpClient.delete(`${environment.api}/cardapio/${id}`).toPromise();
  }
}
