import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  thought = {
    content: 'I love Angular',
    author: 'Jorge',
    template: 'template3'
  }

  constructor () {}

  ngOnInit(): void {

  }

}
