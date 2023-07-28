import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})
export class CreateThoughtsComponent implements OnInit {

  form!: FormGroup;

  constructor (
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: ['Reactive Form'],
      author: ['Angular'],
      template: 'template1'
    })
  }

  createThought() {
    this.service.createThoughts(this.form.value).subscribe(() => {
      this.router.navigate(['/home'])
    });
  }

  returnHomePage() {
    this.router.navigate(['/home'])
  }

}
