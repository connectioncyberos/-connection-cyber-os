export interface AuditEvent {
  timestamp: string;
  event: string;
  userId?: string;
  tenantId?: string;
  details?: Record<string, any>;
}
