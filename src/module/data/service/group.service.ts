import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private http: HttpClient
  ) { }

  public fetchAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/groups`);
  }

  public join(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/groups/${environment.groupId}/memberships`, {});
  }

  public getMessages(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/groups/${environment.groupId}/messages`)
      .pipe(
        map(data => {
          data.data = data.data.reverse();
          return data;
        })
      );
  }

  public postMessage(content: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/groups/${environment.groupId}/messages`, {text_raw: content});
  }
}
