import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtService } from '../thought.service';
import { Thought } from './../thought';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent implements OnInit {

  thought: Thought = {
    id: 0,
    content: '',
    author: '',
    template: ''
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    })
  }

  deleteThought() {
    if(this.thought.id) {
      this.service.deleteThoughts(this.thought.id).subscribe(() => {
        this.router.navigate(['/home']);
      })
    }
  }

  cancelDeleteThought() {
    this.router.navigate(['/home']);
  }

}
