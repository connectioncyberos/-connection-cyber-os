import { AuditEvent } from "./audit.types";
import { writeFileSync, appendFileSync } from "fs";
import { join } from "path";

export class AuditService {
  private static logPath = join(process.cwd(), "core", "identity", "audit", "audit.log");

  static register(event: AuditEvent): void {
    const line = JSON.stringify(event) + "\n";
    appendFileSync(this.logPath, line, { encoding: "utf-8" });
  }
}
