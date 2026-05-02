import { SystemInfo } from "./system.types";

export class SystemService {
  static getInfo(): SystemInfo {
    return {
      version: "1.0.0",
      build: process.env.BUILD_ID ?? "dev-build",
      environment: process.env.NODE_ENV ?? "dev",
      timestamp: new Date().toISOString()
    };
  }
}
