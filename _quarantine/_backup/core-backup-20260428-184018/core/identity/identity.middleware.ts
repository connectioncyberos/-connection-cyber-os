import { NextRequest, NextResponse } from "next/server";
import { IdentityService } from "./identity.service";

export function identityMiddleware(req: NextRequest) {
  const userId = req.headers.get("x-user-id");
  const tenantId = req.headers.get("x-tenant-id");
  const claims = req.headers.get("x-claims")?.split(",") ?? [];

  const context = IdentityService.createContext(userId ?? "", tenantId ?? "", claims);
  (req as any).identity = context;

  return NextResponse.next();
}
