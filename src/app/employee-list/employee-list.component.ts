import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _employeeService: EmployeeService, private router: Router) { }

  public employeeList:any = []

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => {
        console.log(data)
        this.employeeList = data
      })
  }

  onSelect(employee){
    this.router.navigate(['/employees',employee.id])
  }

}
