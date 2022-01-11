import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  beforeEach(()=>{
    service = new TodoService();
  })

  it('should be created',()=>{
    expect(service).toBeTruthy();
  });

  it('add a task',()=>{
    service.addTask('task1');
    expect(service.tasks.length).toEqual(1);
  })

  it('should return all the tasks',()=>{
    service.addTask('Task1');
    service.addTask('Task2');
    service.addTask('Task3');
    expect(service.getTask().length).toEqual(3);
  })
});
