import { Event } from './event';
import { TaskScheduler } from './task-scheduler';

export class CoreApp {
  static registerEvent(name: string, at: Date, data: unknown) {
    return TaskScheduler.schedule(name, at, data);
  }

  static cancelEvent() {
    // Write your code here
  }

  static execute(event: Event) {
    console.log(`Starting ${event.name}(${event.id}):`, event);
    event.terminate();
  }
}
