import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})
export class CreateThoughtsComponent implements OnInit {

  thought: Thought = {
    content: '',
    author: '',
    template: 'template1'
  }

  constructor (
    private service: ThoughtService,
    private router: Router
    ) {}

  ngOnInit(): void {

  }

  createThought() {
    this.service.createThoughts(this.thought).subscribe(() => {
      this.router.navigate(['/home'])
    });
  }

  returnHomePage() {
    this.router.navigate(['/home'])
  }

}
