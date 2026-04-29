import { NextRequest, NextResponse } from "next/server";
import { SecurityService } from "./security.service";

export function securityMiddleware(req: NextRequest) {
  const token = req.headers.get("x-security-token");
  const payload = req.headers.get("x-security-payload");

  if (!token || !payload) {
    return new NextResponse("Token de segurança ausente.", { status: 401 });
  }

  const valid = SecurityService.validateToken(token, payload);

  if (!valid) {
    return new NextResponse("Token inválido.", { status: 403 });
  }

  return NextResponse.next();
}
