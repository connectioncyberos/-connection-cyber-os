export interface HealthStatus {
  status: "UP" | "DOWN";
  timestamp: string;
  details?: Record<string, any>;
}
