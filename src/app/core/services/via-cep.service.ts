import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IViaCepResult {
  logradouro: string;
  bairro: string;
  localidade: string;
}

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {
  http: HttpClient;

  constructor(private httpBackend: HttpBackend) {
    // não quero que os requests desse endereço passem pelo httpInterceptor
    this.http = new HttpClient(this.httpBackend);
  }

  getAddressByCep(cep: string) {
    cep = cep.replace('-', '');

    return this.http.get<IViaCepResult>(`https://viacep.com.br/ws/${cep}/json/`).toPromise();
  }
}
