import { NavigationRule } from "./navigation.types";

export class NavigationService {
  static canAccess(
    rule: NavigationRule,
    user: {
      role?: string;
      claims?: string[];
      tenantId?: string;
    }
  ): boolean {
    if (rule.allowedRoles && user.role && !rule.allowedRoles.includes(user.role)) {
      return false;
    }

    if (rule.allowedClaims && user.claims) {
      const hasClaim = user.claims.some(c => rule.allowedClaims!.includes(c));
      if (!hasClaim) return false;
    }

    if (rule.allowedTenants && user.tenantId && !rule.allowedTenants.includes(user.tenantId)) {
      return false;
    }

    return true;
  }
}
