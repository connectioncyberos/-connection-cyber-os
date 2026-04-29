import { NextRequest, NextResponse } from "next/server";
import { ConfigService } from "./config.service";

export function configMiddleware(req: NextRequest) {
  const env = process.env.NODE_ENV ?? "dev";
  const moduleName = req.headers.get("x-module") ?? undefined;
  const portal = req.headers.get("x-portal") ?? undefined;

  (req as any).config = {
    get: (key: string) => ConfigService.get(key, env, moduleName, portal)
  };

  return NextResponse.next();
}
