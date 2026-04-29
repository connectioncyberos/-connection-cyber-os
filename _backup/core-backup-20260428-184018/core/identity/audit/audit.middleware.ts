import { NextRequest, NextResponse } from "next/server";
import { AuditService } from "./audit.service";

export function auditMiddleware(req: NextRequest) {
  const event = {
    timestamp: new Date().toISOString(),
    event: "request",
    userId: req.headers.get("x-user-id") ?? undefined,
    tenantId: req.headers.get("x-tenant-id") ?? undefined,
    details: {
      method: req.method,
      url: req.url
    }
  };

  AuditService.register(event);

  return NextResponse.next();
}
