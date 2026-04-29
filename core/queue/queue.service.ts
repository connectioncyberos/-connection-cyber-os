import { QueueMessage } from "./queue.types";

export class QueueService {
  private static queues: Record<string, QueueMessage[]> = {};

  static enqueue(message: QueueMessage): void {
    if (!this.queues[message.queue]) {
      this.queues[message.queue] = [];
    }
    this.queues[message.queue].push(message);
  }

  static dequeue(queueName: string): QueueMessage | undefined {
    return this.queues[queueName]?.shift();
  }

  static list(queueName: string): QueueMessage[] {
    return this.queues[queueName] ?? [];
  }
}
