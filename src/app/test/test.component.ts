import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public hasError = true
  public highLightColor='blue'

  public titleStyles = {
    color: "gray",
    fontStyle: "italic"
  }

  public onClick(e){    
    this.hasError=e
  }

  public capEvent(e){
    console.log(e)
  }

  constructor() {}

  ngOnInit() {
  }

}
