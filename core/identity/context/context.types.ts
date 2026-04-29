export interface IdentityContext {
  userId: string;
  tenantId: string;
  claims: string[];
  role?: string;
  permissions?: string[];
  rls?: {
    resource: string;
    level: string;
  };
}
