import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campaign } from 'models/campaign.model';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private baseUrl = 'http://localhost:8082/api/campaigns';
  constructor(private http: HttpClient) {}

  getCampaigns(): Observable<Campaign[]> {
    return this.http
      .get<Campaign[]>(`${this.baseUrl}`)
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
