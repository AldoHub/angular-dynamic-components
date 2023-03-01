import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  public getAllPosts(): Observable<any>{
    return of([{
      title: "First Post"
    },
    {
      title: "Second Post"
    }]);
  }


}
