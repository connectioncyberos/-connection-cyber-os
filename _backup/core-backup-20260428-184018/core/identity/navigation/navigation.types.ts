export interface NavigationRule {
  route: string;
  allowedRoles?: string[];
  allowedClaims?: string[];
  allowedTenants?: string[];
}
