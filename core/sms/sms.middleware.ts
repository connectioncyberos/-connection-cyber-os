import { NextRequest, NextResponse } from "next/server";
import { SmsService } from "./sms.service";

export function smsMiddleware(req: NextRequest) {
  (req as any).sms = {
    send: (msg: any) => SmsService.send(msg)
  };

  return NextResponse.next();
}
