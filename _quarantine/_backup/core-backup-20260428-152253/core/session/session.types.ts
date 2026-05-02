export interface GlobalSession {
  sessionId: string;
  userId: string;
  tenantId?: string;
  createdAt: string;
  expiresAt: string;
  fingerprint?: string;
}
