import { NextRequest, NextResponse } from "next/server";
import { SystemService } from "./system.service";

export function systemMiddleware(req: NextRequest) {
  (req as any).system = {
    info: () => SystemService.getInfo()
  };

  return NextResponse.next();
}
