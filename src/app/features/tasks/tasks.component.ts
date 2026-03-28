import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksService } from '../../core/services/tasks.service';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {

  tasks: any;

  newTask = signal('');

  constructor(private tasksService: TasksService) {
    this.tasks = this.tasksService.tasks;
  }

  addTask() {

    const title = this.newTask().trim();

    if (!title) return;

    this.tasksService.addTask(title);

    this.newTask.set('');

  }

  deleteTask(id: number) {
    this.tasksService.deleteTask(id);
  }

  toggleStatus(id: number) {
    this.tasksService.toggleStatus(id);
  }

}
