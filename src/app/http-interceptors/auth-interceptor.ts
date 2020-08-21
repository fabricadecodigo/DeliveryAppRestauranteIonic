import { ToastService } from './../core/services/toast.service';
import { AuthService } from './../users/shared/auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private toast: ToastService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const token = this.authService.getAuthorizationToken();
        let request: HttpRequest<any> = req;

        if (token && !this.authService.isTokenExpired(token)) {
            request = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
        }

        return next.handle(request)
            .pipe(
                catchError(error => this.handleError(error))
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // Erro de client-side ou de rede
            console.error('Ocorreu um erro:', error.error.message);
        } else {
            // Erro retornando pelo backend
            console.error(
                `Código do erro ${error.status}, ` +
                `Erro: ${JSON.stringify(error.error)}`);
        }

        if (error.status === 401) {
            this.toast.showError('Seu login expirou, por favor efetue login novamente.');
            // quero recarregar a aplicação, por isso não uso o router do angular
            window.location.href = '/login';
        } else {
            // retornar um observable com uma mensagem amigavel.
            return throwError('Ocorreu um erro, tente novamente');
        }
    }
}
