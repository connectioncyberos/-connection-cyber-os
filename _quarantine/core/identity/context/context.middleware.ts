import { NextRequest, NextResponse } from "next/server";
import { ContextService } from "./context.service";

export function contextMiddleware(req: NextRequest) {
  const userId = req.headers.get("x-user-id");
  const tenantId = req.headers.get("x-tenant-id");
  const claims = req.headers.get("x-claims")?.split(",") ?? [];
  const role = req.headers.get("x-role") ?? undefined;
  const permissions = req.headers.get("x-permissions")?.split(",") ?? undefined;

  const rls = req.headers.get("x-rls-resource")
    ? {
        resource: req.headers.get("x-rls-resource") ?? "",
        level: req.headers.get("x-rls-level") ?? ""
      }
    : undefined;

  const context = ContextService.buildContext({
    userId,
    tenantId,
    claims,
    role,
    permissions,
    rls
  });

  (req as any).identityContext = context;

  return NextResponse.next();
}
