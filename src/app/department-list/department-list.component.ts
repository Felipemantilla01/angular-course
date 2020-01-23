import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../departments.service';
import { Router, ActivatedRoute } from '@angular/router'
//import { setInterval } from 'timers';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private _departmentService: DepartmentsService, private router : Router, private route: ActivatedRoute) { }

  public departmentList:any = []
  public prevSelectDepartment

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
    //this.router.navigate(['/departments', department.id])
    this.router.navigate([department.id], {relativeTo:this.route})
  }
 

  ngOnInit( ) { 

    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.prevSelectDepartment=id
    this._departmentService.getDepartments()
    .subscribe(data => {
      console.log(data)
      this.departmentList = data
    })
  }

  isSelected(department){
    return this.prevSelectDepartment === department.id
  }

}
