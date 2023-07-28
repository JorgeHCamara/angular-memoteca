import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchById(parseInt(id!)).subscribe((thought) => {
      this.form = this.formBuilder.group({
        id: [thought.id],
        content: [thought.content, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        author: [thought.author, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        template: [thought.template]
      })
    })
  }

  editThought() {
    this.service.editThoughts(this.form.value).subscribe(() => {
      this.router.navigate(['/home'])
    })
  }

  returnHomePage() {
    this.router.navigate(['/home'])
  }

  enableButton() {
    if (this.form.valid) {
      return 'button'
    } else {
      return 'disabled__button'
    }
  }

}
