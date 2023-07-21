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
      template: 'template3'
    },
    {
      content: 'Minha propriedade é decorada com @Input',
      author: 'Componente filho',
      template: 'template2'
    },
    {
      content: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
      author: 'MoreThan256Characters',
      template: 'template1'
    },
  ];

  constructor () {}

  ngOnInit(): void {

  }

}
