import { GlobalAuditEvent } from "./audit.types";
import { appendFileSync } from "fs";
import { join } from "path";

export class GlobalAuditService {
  private static logPath = join(process.cwd(), "core", "audit", "audit.log");

  static register(event: GlobalAuditEvent): void {
    const line = JSON.stringify(event) + "\n";
    appendFileSync(this.logPath, line, { encoding: "utf-8" });
  }
}
