import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ClientService {

  private BASE_URL: string = `${environment.endpoint}api/countries`;

  private httpOptionsWithJSON = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` }),
  }

  constructor(
    private http: HttpClient,
  ) { }

  getCountries(): Observable<any> {
    return this.http.get(`${this.BASE_URL}`, this.httpOptionsWithJSON);
  }
}
