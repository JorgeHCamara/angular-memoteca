import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})
export class CreateThoughtsComponent implements OnInit {

  thought = {
    id: '1',
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
