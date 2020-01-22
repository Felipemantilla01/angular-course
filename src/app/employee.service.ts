import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string = 'http://localhost:3200/employees'
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
  }

  /*getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>('http://dummy.restapiexample.com/api/v1/employees')
  }
  /*getEmployees(){
    
    //return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
    return this.http.get(this._url)
  }*/
}
