import { NextRequest, NextResponse } from "next/server";

export function storageMiddleware(req: NextRequest) {
  const storagePath = req.headers.get("x-storage-path") ?? "C:/Projetos/connection-cyber-os/storage";

  (req as any).storage = { path: storagePath };

  return NextResponse.next();
}
