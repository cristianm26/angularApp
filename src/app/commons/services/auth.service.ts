import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { IRQLogin } from '../models/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private readonly URL = environment.api;
	constructor(private http: HttpClient) {}

	login(login: IRQLogin): Observable<IRQLogin> {
		return this.http.post<IRQLogin>(`${this.URL}/login`, login).pipe(
			catchError((error) => {
				return throwError(error);
				/* 	return this.errorHandler(error); */
			})
		);
	}

	errorHandler(error: HttpErrorResponse) {
		if (error instanceof HttpErrorResponse) {
			if (error.error instanceof ErrorEvent) {
				console.log('Error de Cliente');
			} else {
				console.log('Error de Servidor');
			}
		} else {
			console.log('Otro tipo de Error ');
		}
	}
}
