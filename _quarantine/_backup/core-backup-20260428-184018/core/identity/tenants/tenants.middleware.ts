import { NextRequest, NextResponse } from "next/server";

export function tenantsMiddleware(req: NextRequest) {
  const tenantId = req.headers.get("x-tenant-id");

  if (!tenantId) {
    return new NextResponse("Tenant não informado.", { status: 400 });
  }

  (req as any).tenantId = tenantId;

  return NextResponse.next();
}
