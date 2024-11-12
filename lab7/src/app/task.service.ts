import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  fetchTasks(): Observable<any[]> {
    return of([
      { name: 'Learn Angular', date: new Date(), completed: false },
      { name: 'Build a small project', date: new Date(), completed: true },
    ]);
  }
}
