import { NextRequest, NextResponse } from "next/server";
import { SessionService } from "./session.service";

export function sessionMiddleware(req: NextRequest) {
  const sessionHeader = req.headers.get("x-session");

  if (!sessionHeader) {
    return new NextResponse("Sessão ausente.", { status: 401 });
  }

  const session = JSON.parse(sessionHeader);

  if (SessionService.isExpired(session)) {
    return new NextResponse("Sessão expirada.", { status: 440 });
  }

  (req as any).session = session;

  return NextResponse.next();
}
