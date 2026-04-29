import { NextRequest, NextResponse } from "next/server";
import { ProvidersService } from "./providers.service";

export function providersMiddleware(req: NextRequest) {
  (req as any).provider = {
    get: (name: string) => ProvidersService.get(name)
  };

  return NextResponse.next();
}
