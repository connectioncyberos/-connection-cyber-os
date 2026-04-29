import { NextRequest, NextResponse } from "next/server";
import { NavigationService } from "./navigation.service";

export function navigationMiddleware(req: NextRequest) {
  const route = req.nextUrl.pathname;

  const user = {
    role: req.headers.get("x-role") ?? undefined,
    claims: req.headers.get("x-claims")?.split(",") ?? undefined,
    tenantId: req.headers.get("x-tenant-id") ?? undefined
  };

  const ruleHeader = req.headers.get("x-nav-rule");

  if (!ruleHeader) {
    return NextResponse.next();
  }

  const rule = JSON.parse(ruleHeader);

  const allowed = NavigationService.canAccess(rule, user);

  if (!allowed) {
    return new NextResponse("Acesso negado pela política de navegação.", { status: 403 });
  }

  return NextResponse.next();
}
