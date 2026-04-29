import { HealthStatus } from "./health.types";

export class HealthService {
  static check(): HealthStatus {
    return {
      status: "UP",
      timestamp: new Date().toISOString(),
      details: {
        uptime: process.uptime(),
        memory: process.memoryUsage()
      }
    };
  }
}
