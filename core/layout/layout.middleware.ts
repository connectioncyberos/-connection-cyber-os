import { NextRequest, NextResponse } from "next/server";

export function layoutMiddleware(req: NextRequest) {
  const theme = req.headers.get("x-theme") ?? "default";

  (req as any).layout = { theme };

  return NextResponse.next();
}
