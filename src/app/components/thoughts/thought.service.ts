import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Thought } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) { }

  getThoughts(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API)
  }

  createThoughts(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, thought)
  }

  editThoughts(thought: Thought): Observable<Thought>{
    const url = `${this.API}/${thought.id}`;
    return this.http.put<Thought>(url, thought);
  }

  deleteThoughts(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Thought>(url);
  }

  searchById(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.get<Thought>(url);
  }

}
