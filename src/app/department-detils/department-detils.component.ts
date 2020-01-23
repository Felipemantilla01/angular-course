import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-department-detils',
  templateUrl: './department-detils.component.html',
  styleUrls: ['./department-detils.component.css']
})
export class DepartmentDetilsComponent implements OnInit {

  public departmentId
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.departmentId = id

    /*this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'))
      this.departmentId = id
    })*/
  }

  onNext(){
    let nextId = this.departmentId + 1
    //this.router.navigate(['/departments',nextId])
    this.router.navigate([nextId],{relativeTo:this.route})
    this.departmentId = nextId
  }
  onPrev(){
    let prevId = this.departmentId - 1
    //this.router.navigate(['/departments',prevId])
    this.router.navigate([prevId],{relativeTo:this.route})
    this.departmentId = prevId
  }

  gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null
    //this.router.navigate(['/departments',{id:selectedId}])
    this.router.navigate(['../',{id:selectedId}], {relativeTo:this.route})
  }


}
