import { Tenant } from "./tenants.types";

export class TenantsService {
  static createTenant(tenantId: string, tenantName: string): Tenant {
    return { tenantId, tenantName, active: true };
  }
}
