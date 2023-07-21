import { Component, OnInit, Input } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought: Thought = {
    id: 0,
    content: 'I love Angular',
    author: 'Jorge',
    template: 'template3'
  }

  constructor () {}

  ngOnInit(): void {

  }

  thoughtWidth(): string {
    if (this.thought.content.length >= 256) {
      return 'thought-g'
    }
    return 'thought-p'
  }

}
