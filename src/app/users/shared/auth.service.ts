import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

interface IAuthResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http: HttpClient;

  constructor(
    private httpBackend: HttpBackend
  ) {
    this.http = new HttpClient(this.httpBackend);
  }

  async login(email: string, password: string) {
    try {
      const response = await this.http.post<IAuthResponse>(`${environment.api}/auth/login`, { email, password }).toPromise();
      if (response.access_token) {
        this.setAuthorizationToken(response.access_token);
        return true;
      }

      return false;
    } catch (error) {
      throw new Error(this.handlerError(error));
    }
  }

  private handlerError(error: HttpErrorResponse) {
    let mensagem = '';

    if (error.status === 401) {
      mensagem = 'Usuario/senha inválido(s)';
    } else {
      mensagem = 'Ocorreu algum erro ao tentar efetuar o login';
    }

    return mensagem;
  }

  setAuthorizationToken(token: string) {
    localStorage.setItem('token', token);
  }

  getAuthorizationToken() {
    const token = localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (token && !this.isTokenExpired(token)) {
      return true;
    }

    return false;
  }
}
