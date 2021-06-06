import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuario(): Observable<Data[]> {

    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'emiliano');

    return this.http.get<Api>('https://reqresasdasda.in/api/user', {
      params,
      /* headers */
    }).pipe(
      map((resp: Api) => resp.data),
      );
  }
}

export interface Api {
  data: Data[];
  page: number;
  per_page: number;
  support: Support;
  total: number;
  total_pages: number;
}

export interface Data {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
}

export interface Support {
  text: string;
  url: string;
}
