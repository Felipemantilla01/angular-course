import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private _employeeService:EmployeeService) { }

  public employeeList = []
  public errorMsg

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employeeList = data,
        error => this.errorMsg = error.message)
      //.subscribe(data => console.log(data))
  }

}
