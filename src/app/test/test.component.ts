import { Component, OnInit, Input , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  message="welcome to angular course"
  name="felipe"

  profile={
    "firstName":"John",
    "lastName":"Defoe"
  }

  public date = new Date();
  constructor() {}

  ngOnInit() {
  }

}
