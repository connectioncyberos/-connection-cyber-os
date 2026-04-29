import { NextRequest, NextResponse } from "next/server";
import { QueueService } from "./queue.service";

export function queueMiddleware(req: NextRequest) {
  (req as any).queue = {
    enqueue: (msg: any) => QueueService.enqueue(msg),
    dequeue: (name: string) => QueueService.dequeue(name)
  };

  return NextResponse.next();
}
