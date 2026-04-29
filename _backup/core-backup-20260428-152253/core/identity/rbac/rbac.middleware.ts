import { NextRequest, NextResponse } from "next/server";

export function rbacMiddleware(req: NextRequest) {
  const role = req.headers.get("x-role");
  const permissions = req.headers.get("x-permissions");

  if (!role) {
    return new NextResponse("Role não informada.", { status: 400 });
  }

  const parsedPermissions = permissions ? permissions.split(",").map(p => p.trim()) : [];

  (req as any).role = role;
  (req as any).permissions = parsedPermissions;

  return NextResponse.next();
}
