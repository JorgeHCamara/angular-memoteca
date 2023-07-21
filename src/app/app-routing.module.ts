import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'createThought',
    component: CreateThoughtsComponent
  },
  {
    path: 'home',
    component: ListThoughtsComponent
  },
  {
    path: 'thoughts/deleteThought/:id',
    component: DeleteThoughtComponent
  },
  {
    path: 'thoughts/editThought/:id',
    component: EditThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
