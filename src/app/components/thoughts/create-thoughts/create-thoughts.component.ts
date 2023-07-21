import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})
export class CreateThoughtsComponent implements OnInit {

  thought: Thought = {
    id: 1,
    content: 'Learning Angular',
    author: 'Dev',
    template: 'template1'
  }

  constructor () {}

  ngOnInit(): void {

  }

  createThought() {
    alert('Novo pensamento criado');
  }

  cancel() {
    this.thought.content = '';
    this.thought.author = '';
  }

}
