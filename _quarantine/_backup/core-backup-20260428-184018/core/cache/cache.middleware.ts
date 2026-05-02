import { NextRequest, NextResponse } from "next/server";
import { CacheService } from "./cache.service";

export function cacheMiddleware(req: NextRequest) {
  (req as any).cache = {
    get: (key: string) => CacheService.get(key),
    set: (key: string, value: any, ttl?: number) => CacheService.set(key, value, ttl)
  };

  return NextResponse.next();
}
