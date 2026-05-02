import { NextRequest, NextResponse } from "next/server";

export function rlsMiddleware(req: NextRequest) {
  const tenantId = req.headers.get("x-tenant-id");
  const resource = req.headers.get("x-resource");
  const level = req.headers.get("x-access-level");

  if (!tenantId || !resource || !level) {
    return new NextResponse("RLS incompleto.", { status: 400 });
  }

  (req as any).rls = { tenantId, resource, level };

  return NextResponse.next();
}
