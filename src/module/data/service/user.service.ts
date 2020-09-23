import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public getUserProfile(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users/~`)
      .pipe(
        map((data: any) => data.data)
      );
  }
}
