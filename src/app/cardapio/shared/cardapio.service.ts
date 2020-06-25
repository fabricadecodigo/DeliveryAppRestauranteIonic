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

  insert(cardapio: ICardapioModel) {
    return this.httpClient.post<ICardapioResponse>(`${environment.api}/cardapio/`, cardapio).toPromise();
  }

  update(id: string, cardapio: ICardapioModel) {
    return this.httpClient.put<ICardapioResponse>(`${environment.api}/cardapio/${id}`, cardapio).toPromise();
  }

  delete(id: string) {
    return this.httpClient.delete(`${environment.api}/cardapio/${id}`).toPromise();
  }
}
