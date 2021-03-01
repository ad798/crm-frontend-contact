import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Contactability } from 'models/contactability.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactabilityService {
  private baseUrl = 'http://localhost:8082/api/contactability-registry';
  constructor(private http: HttpClient) {}

  getByStatus(status: string): Observable<Contactability[]> {
    return this.http
      .get<Contactability[]>(`${this.baseUrl}/byStatus/${status}`)
      .pipe(
        catchError((error) => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            errorMsg = this.getServerErrorMessage(error);
          }
          return throwError(errorMsg);
        })
      );
  }

  getByNameAndSurname(
    name: string | undefined,
    surname: string | undefined
  ): Observable<Contactability[]> {
    return this.http
      .get<Contactability[]>(
        `${this.baseUrl}/byClientNameAndSurname/${name}-${surname}`
      )
      .pipe(
        catchError((error) => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            errorMsg = this.getServerErrorMessage(error);
          }
          return throwError(errorMsg);
        })
      );
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 400: {
        return `No status defined in HTTP Request to retrive contactability registries: ${error.message}`;
      }
      case 401: {
        return `Unauthorized: ${error.message}`;
      }
      case 403: {
        return `Forbidden: ${error.message}`;
      }
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }
    }
  }
}
