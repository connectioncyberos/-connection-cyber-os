import { RlsRule } from "./rls.types";

export class RlsService {
  static createRule(tenantId: string, resource: string, accessLevel: "read" | "write" | "admin"): RlsRule {
    return { tenantId, resource, accessLevel };
  }

  static canAccess(rule: RlsRule, resource: string, level: string): boolean {
    return rule.resource === resource && rule.accessLevel === level;
  }
}
