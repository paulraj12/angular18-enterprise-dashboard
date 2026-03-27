import { Injectable, signal } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks = signal<Task[]>([
    { id: 1, title: 'Prepare dashboard UI', status: 'Pending' },
    { id: 2, title: 'Implement API integration', status: 'In Progress' }
  ]);

  addTask(title: string) {

    const newTask: Task = {
      id: Date.now(),
      title,
      status: 'Pending'
    };

    this.tasks.update(tasks => [...tasks, newTask]);

  }

  deleteTask(id: number) {

    this.tasks.update(tasks =>
      tasks.filter(t => t.id !== id)
    );

  }

  toggleStatus(id: number) {

    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id
          ? {
              ...task,
              status: task.status === 'Completed'
                ? 'Pending'
                : 'Completed'
            }
          : task
      )
    );

  }

}
