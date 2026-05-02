import { GlobalEvent } from "./events.types";

export class EventsService {
  private static listeners: Record<string, ((payload: any) => void)[]> = {};

  static publish(event: string, payload: any): void {
    const evt: GlobalEvent = {
      event,
      payload,
      timestamp: new Date().toISOString()
    };

    const handlers = this.listeners[event] ?? [];
    handlers.forEach(h => h(payload));
  }

  static subscribe(event: string, handler: (payload: any) => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(handler);
  }
}
