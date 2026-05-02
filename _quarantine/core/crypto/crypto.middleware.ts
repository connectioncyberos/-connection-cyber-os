import { NextRequest, NextResponse } from "next/server";
import { CryptoService } from "./crypto.service";

export function cryptoMiddleware(req: NextRequest) {
  (req as any).crypto = {
    hash: (data: string) => CryptoService.hash(data)
  };

  return NextResponse.next();
}
