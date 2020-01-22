import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private _url:string = 'http://localhost:3200/departments';
  
  constructor(private http: HttpClient) { }

  /*getDepartments(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
  }*/
  getDepartments(){
    return this.http.get(this._url)
  }
}
