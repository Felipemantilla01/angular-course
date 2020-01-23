import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  public employeeId
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.employeeId = id
  }

  onNext(){
    let nextId = this.employeeId + 1
    //this.router.navigate(['/employees', nextId])
    this.router.navigate([nextId], {relativeTo:this.route})
    this.employeeId += 1
  }

  onPrev(){
    let prevId = this.employeeId - 1
    //this.router.navigate(['/employees', prevId])
    this.router.navigate([prevId], {relativeTo:this.route})
    this.employeeId -= 1
  }
  gotoEmployees(){
    let selectedId = this.employeeId ? this.employeeId : null
    //this.router.navigate(['/employees',{id:selectedId}])
    this.router.navigate(['../', {id:selectedId}],{relativeTo:this.route})
  }

}