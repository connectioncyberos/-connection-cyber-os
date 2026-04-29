export interface RlsRule {
  tenantId: string;
  resource: string;
  accessLevel: "read" | "write" | "admin";
}
