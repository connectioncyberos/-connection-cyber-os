import crypto from "crypto";
import { GlobalSession } from "./session.types";

export class SessionService {
  static createSession(userId: string, tenantId?: string, fingerprint?: string): GlobalSession {
    const now = new Date();
    const expires = new Date(now.getTime() + 1000 * 60 * 60); // 1 hora

    return {
      sessionId: crypto.randomUUID(),
      userId,
      tenantId,
      createdAt: now.toISOString(),
      expiresAt: expires.toISOString(),
      fingerprint
    };
  }

  static isExpired(session: GlobalSession): boolean {
    return new Date(session.expiresAt).getTime() < Date.now();
  }
}
