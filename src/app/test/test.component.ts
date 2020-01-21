import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  public name = 'Felipe'
  public siteUrl = window.location.href
  constructor() {}

  helloWorld(){
    return 'hello world by ' + this.name 
  }
  ngOnInit() {
  }

}
