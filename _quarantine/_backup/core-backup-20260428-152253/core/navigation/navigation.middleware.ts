import { NextRequest, NextResponse } from "next/server";
import { GlobalNavigationService } from "./navigation.service";

export function globalNavigationMiddleware(req: NextRequest) {
  const route = req.nextUrl.pathname;
  const env = process.env.NODE_ENV ?? "dev";

  const ruleHeader = req.headers.get("x-global-nav-rule");

  if (!ruleHeader) {
    return NextResponse.next();
  }

  const rule = JSON.parse(ruleHeader);

  const allowed = GlobalNavigationService.isRouteEnabled(rule, env);

  if (!allowed) {
    return new NextResponse("Rota desabilitada pela navegação global.", { status: 403 });
  }

  return NextResponse.next();
}
