import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string = 'http://localhost:3200/employees'
  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get(this._url)
  }
}
