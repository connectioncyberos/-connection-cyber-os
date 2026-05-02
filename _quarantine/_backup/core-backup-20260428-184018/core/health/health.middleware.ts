import { NextRequest, NextResponse } from "next/server";
import { HealthService } from "./health.service";

export function healthMiddleware(req: NextRequest) {
  (req as any).health = {
    check: () => HealthService.check()
  };

  return NextResponse.next();
}
