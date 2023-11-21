import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  //simulate a database
  private tasks: Task[] = [
    {
      id: v4(),
      title: 'first task',
      description: 'some tasks',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }
  createTasks(title: string, description: string) {
    const task = {
      id: new Date().toISOString(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);

    return task;
  }
  updateTasks() {}
  deleteTasks() {}
}
