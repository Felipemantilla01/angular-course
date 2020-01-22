import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1,"name":"Andrew","age":30},
      {"id":2,"name":"Jose","age":25},
      {"id":3,"name":"Daniel","age":19},
      {"id":4,"name":"Gael","age":32},
    ]
  }
}
