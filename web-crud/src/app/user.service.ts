import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }
 protected url = 'http://localhost:5000/';
//  https://jsonplaceholder.typicode.com/users

  getUsers(): Observable<any> {
    return this
            .http
              .get(this.url)
            .pipe(
              map(res => res)
          );
      }
}