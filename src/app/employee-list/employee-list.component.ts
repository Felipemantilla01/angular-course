import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  public employeeList:any = []
  public selectedEmployee

  ngOnInit() {

    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.selectedEmployee = id
  
    this._employeeService.getEmployees()
      .subscribe(data => {
        console.log(data)
        this.employeeList = data
      })
  }

  onSelect(employee){
    //this.router.navigate(['/employees',employee.id])
    this.router.navigate([employee.id],{relativeTo:this.route})
  }

  isSelected(employee){
    return this.selectedEmployee === employee.id
  }

}
