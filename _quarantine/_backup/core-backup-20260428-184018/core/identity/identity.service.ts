import { IdentityContext } from "./identity.types";

export class IdentityService {
  static createContext(userId: string, tenantId: string, claims: string[]): IdentityContext {
    return { userId, tenantId, claims };
  }
}
