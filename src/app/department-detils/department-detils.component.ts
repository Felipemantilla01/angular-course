import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-department-detils',
  templateUrl: './department-detils.component.html',
  styleUrls: ['./department-detils.component.css']
})
export class DepartmentDetilsComponent implements OnInit {

  public departmentId
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.departmentId = id
  }

}
