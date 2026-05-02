import { NextRequest, NextResponse } from "next/server";
import { MailService } from "./mail.service";

export function mailMiddleware(req: NextRequest) {
  (req as any).mail = {
    send: (msg: any) => MailService.send(msg)
  };

  return NextResponse.next();
}
