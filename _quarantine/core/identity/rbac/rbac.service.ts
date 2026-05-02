import { Role } from "./rbac.types";

export class RbacService {
  static createRole(roleId: string, roleName: string, permissions: string[] = []): Role {
    return { roleId, roleName, permissions };
  }

  static hasPermission(role: Role, permission: string): boolean {
    return role.permissions.includes(permission);
  }
}
