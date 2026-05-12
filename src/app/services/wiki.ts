import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Wiki {
  readonly apiUrl = 'https://www.swapi.tech/api/';

  constructor(private http: HttpClient) {}

  getAllArticles(category: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${category}/`);
  }
}
