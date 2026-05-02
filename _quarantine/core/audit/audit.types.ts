export interface GlobalAuditEvent {
  timestamp: string;
  module: string;
  event: string;
  severity?: "info" | "warning" | "error" | "critical";
  details?: Record<string, any>;
}
