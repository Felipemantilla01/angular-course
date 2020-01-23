import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../departments.service';
import { Router } from '@angular/router'
//import { setInterval } from 'timers';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private _departmentService: DepartmentsService, private router : Router) { }

  public departmentList:any = []

  /*
  private autoSaveInterval: any = setInterval(()=>{
    this._departmentService.getDepartments()
    .subscribe(data => {
      //console.log(data)
      this.departmentList = data
    })
  },250);
  */

  
  onSelect(department){
    this.router.navigate(['/departments', department.id])
  }
 

  ngOnInit( ) {   
    this._departmentService.getDepartments()
    .subscribe(data => {
      console.log(data)
      this.departmentList = data
    })
  }

}
