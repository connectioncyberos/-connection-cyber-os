export interface QueueMessage {
  queue: string;
  payload: Record<string, any>;
  retry?: number;
}
