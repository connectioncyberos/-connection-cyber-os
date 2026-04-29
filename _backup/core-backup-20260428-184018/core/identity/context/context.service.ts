import { IdentityContext } from "./context.types";

export class ContextService {
  static buildContext(data: Partial<IdentityContext>): IdentityContext {
    return {
      userId: data.userId ?? "",
      tenantId: data.tenantId ?? "",
      claims: data.claims ?? [],
      role: data.role,
      permissions: data.permissions,
      rls: data.rls
    };
  }
}
