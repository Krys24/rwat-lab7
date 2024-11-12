import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  name: string;
  date: Date;
  completed: boolean;
}

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTaskName = '';

  addTask(): void {
    if (this.newTaskName) {
      this.tasks.push({
        name: this.newTaskName,
        date: new Date(),
        completed: false,
      });
      this.newTaskName = '';
    }
  }
}
