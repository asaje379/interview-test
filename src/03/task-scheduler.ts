import { CoreApp } from './core';
import { Event, EventStatus } from './event';

export class TaskScheduler {
  static events: Event[] = [];

  static schedule(name: string, at: Date, data: unknown) {
    const event = new Event(name, at, data);
    TaskScheduler.events.push(event);
    return event.id;
  }

  static run() {
    setInterval(() => {
      const executableEvents = TaskScheduler.events.filter((event) => {
        return (
          event.status === EventStatus.PENDING &&
          new Date(event.scheduledFor).getTime() < Date.now()
        );
      });
      for (const event of executableEvents) {
        event.start();
        CoreApp.execute(event);
      }
    }, 1000);
  }

  static getEvent(eventId: string) {
    return TaskScheduler.events.find((event) => event.id === eventId);
  }
}
