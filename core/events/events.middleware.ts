import { NextRequest, NextResponse } from "next/server";
import { EventsService } from "./events.service";

export function eventsMiddleware(req: NextRequest) {
  (req as any).events = {
    publish: (event: string, payload: any) => EventsService.publish(event, payload)
  };

  return NextResponse.next();
}
