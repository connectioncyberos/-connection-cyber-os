import { NextRequest, NextResponse } from "next/server";
import { ErrorsService } from "./errors.service";

export function errorsMiddleware(req: NextRequest) {
  (req as any).error = {
    throw: (code: string, message: string, details?: any) =>
      ErrorsService.throw(code, message, details)
  };

  return NextResponse.next();
}
