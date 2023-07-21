import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  thoughtsList = [
    {
      content: 'Passo informações para o componente filho',
      author: 'Componente pai',
      template: 'template3',
    },
    {
      content: 'Minha propriedade é decorada com @Input()',
      author: 'Componente filho',
      template: 'template2',
    }
  ];

  constructor () {}

  ngOnInit(): void {

  }

}
