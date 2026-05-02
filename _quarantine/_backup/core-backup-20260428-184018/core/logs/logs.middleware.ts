import { NextRequest, NextResponse } from "next/server";
import { LogsService } from "./logs.service";

export function logsMiddleware(req: NextRequest) {
  (req as any).log = {
    info: (msg: string, ctx?: any) => LogsService.info(msg, ctx),
    warn: (msg: string, ctx?: any) => LogsService.warn(msg, ctx),
    error: (msg: string, ctx?: any) => LogsService.error(msg, ctx),
    critical: (msg: string, ctx?: any) => LogsService.critical(msg, ctx)
  };

  return NextResponse.next();
}
