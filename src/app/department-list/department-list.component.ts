import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../departments.service';
import { setInterval } from 'timers';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private _departmentService: DepartmentsService) { }

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
 
  ngOnInit( ) {   
    this._departmentService.getDepartments()
    .subscribe(data => {
      console.log(data)
      this.departmentList = data
    })
  }

}
