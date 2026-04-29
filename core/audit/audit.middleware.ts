import { NextRequest, NextResponse } from "next/server";
import { GlobalAuditService } from "./audit.service";

export function globalAuditMiddleware(req: NextRequest) {
  const event = {
    timestamp: new Date().toISOString(),
    module: "global",
    event: "request",
    severity: "info",
    details: {
      method: req.method,
      url: req.url
    }
  };

  GlobalAuditService.register(event);

  return NextResponse.next();
}
