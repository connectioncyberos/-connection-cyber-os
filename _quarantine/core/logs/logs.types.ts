export interface LogEntry {
  level: "info" | "warn" | "error" | "critical";
  message: string;
  context?: Record<string, any>;
  timestamp: string;
}
