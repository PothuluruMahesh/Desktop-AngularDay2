import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello1',
  templateUrl: './hello1.component.html',
  styleUrls: ['./hello1.component.css']
})
export class Hello1Component implements OnInit {
  getHello()
  {
    return "Hello this is from component";
  }

  constructor() { }

  ngOnInit() {
  }

}
