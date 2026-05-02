import { appendFileSync } from "fs";
import { join } from "path";
import { LogEntry } from "./logs.types";

export class LogsService {
  private static logPath = join(process.cwd(), "core", "logs", "system.log");

  static write(entry: LogEntry): void {
    const line = JSON.stringify(entry) + "\n";
    appendFileSync(this.logPath, line, { encoding: "utf-8" });
  }

  static info(message: string, context?: any) {
    this.write({
      level: "info",
      message,
      context,
      timestamp: new Date().toISOString()
    });
  }

  static warn(message: string, context?: any) {
    this.write({
      level: "warn",
      message,
      context,
      timestamp: new Date().toISOString()
    });
  }

  static error(message: string, context?: any) {
    this.write({
      level: "error",
      message,
      context,
      timestamp: new Date().toISOString()
    });
  }

  static critical(message: string, context?: any) {
    this.write({
      level: "critical",
      message,
      context,
      timestamp: new Date().toISOString()
    });
  }
}
