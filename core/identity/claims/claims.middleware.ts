import { NextRequest, NextResponse } from "next/server";

export function claimsMiddleware(req: NextRequest) {
  const claimsHeader = req.headers.get("x-claims");

  if (!claimsHeader) {
    return new NextResponse("Nenhuma claim informada.", { status: 400 });
  }

  const claims = claimsHeader.split(",").map(c => c.trim());
  (req as any).claims = claims;

  return NextResponse.next();
}
