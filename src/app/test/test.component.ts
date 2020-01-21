import { Component, OnInit, Input , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  @Output() public childEvent = new EventEmitter()

  @Input() public parentData 
  @Input('parentData2') public name

  constructor() {}

  ngOnInit() {
  }

  fireEvent(){
    console.log('child event')
    this.childEvent.emit('hello from the test component')
  }

}
