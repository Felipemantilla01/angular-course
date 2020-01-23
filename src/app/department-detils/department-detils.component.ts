import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , ParamMap} from '@angular/router'
import { parse } from 'querystring';

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
    this.router.navigate(['/departments',nextId])
    this.departmentId = nextId
  }
  onPrev(){
    let prevId = this.departmentId - 1
    this.router.navigate(['/departments',prevId])
    this.departmentId = prevId
  }

  gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null
    this.router.navigate(['/departments',{id:selectedId}])
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo:this.route})
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo:this.route})
  }


}
