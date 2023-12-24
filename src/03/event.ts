import { randomUUID } from 'crypto';

export enum EventStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  EXECUTED = 'EXECUTED',
  CANCELED = 'CANCELED',
}

export class Event {
  name: string;
  registeredAt: Date;
  scheduledFor: Date;
  startedAt: Date | null;
  terminatedAt: Date | null;
  status: EventStatus;
  data: unknown;
  id: string;

  constructor(name: string, at: Date, data: unknown) {
    this.name = name;
    this.registeredAt = new Date();
    this.scheduledFor = at;
    this.startedAt = null;
    this.terminatedAt = null;
    this.status = EventStatus.PENDING;
    this.data = data;
    this.id = randomUUID();
  }

  get() {
    return `${this.name}[${this.id}]_${this.status}`;
  }

  start() {
    this.startedAt = new Date();
    this.status = EventStatus.IN_PROGRESS;
    console.log('Event started: ', this.get());
  }

  cancel() {
    this.terminatedAt = new Date();
    this.status = EventStatus.CANCELED;
    console.log('Event canceled: ', this.get());
  }

  terminate() {
    this.terminatedAt = new Date();
    this.status = EventStatus.EXECUTED;
    console.log('Event terminated: ', this.get());
  }
}
