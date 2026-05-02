import { NextRequest, NextResponse } from "next/server";
import { GlobalContextService } from "./context.service";

export function globalContextMiddleware(req: NextRequest) {
  const environment = process.env.NODE_ENV as "dev" | "stage" | "prod" ?? "dev";
  const moduleName = req.headers.get("x-module") ?? "unknown";
  const portal = req.headers.get("x-portal") ?? undefined;
  const tenantId = req.headers.get("x-tenant-id") ?? undefined;

  const context = GlobalContextService.buildContext({
    environment,
    module: moduleName,
    portal,
    tenantId
  });

  (req as any).globalContext = context;

  return NextResponse.next();
}
