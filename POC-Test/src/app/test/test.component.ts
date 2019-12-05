import { Component, OnInit } from '@angular/core';
import { MockService } from "../mock.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
data = [
  {
    "id": 123,
    "name": "Neha",
    "age": 25
},
{
    "id": 234,
    "name": "Sairaj",
    "age": 35
}
]
  constructor() { }

  ngOnInit() {
    // this.fetchData();
  }
// fetchData(){
// this.mock.getMockData()
// .subscribe(data => this.data= data)
// }
}
