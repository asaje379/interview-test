import { CoreApp } from './core';
import { TaskScheduler } from './task-scheduler';

export function test03() {
  CoreApp.registerEvent('test 1', new Date('2023-12-24 16:01:50'), {
    data: 'test 1',
  });

  CoreApp.registerEvent('test 2', new Date('2023-12-24 16:01:10'), {
    data: 'test 2',
  });

  CoreApp.registerEvent('test 3', new Date('2023-12-24 16:01:40'), {
    data: 'test 3',
  });

  CoreApp.registerEvent('test 4', new Date('2023-12-24 16:01:50'), {
    data: 'test 4',
  });

  TaskScheduler.run();
  console.log(new Date());
}
