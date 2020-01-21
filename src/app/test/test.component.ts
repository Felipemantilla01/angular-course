import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public textClass = "text-success"
  public hasError = true
  public hasError2 = false

  public isSpecial = true
  messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
    }
  constructor() {}

  ngOnInit() {
  }

}
