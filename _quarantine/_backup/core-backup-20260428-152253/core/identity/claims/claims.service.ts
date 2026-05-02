import { Claim } from "./claims.types";

export class ClaimsService {
  static createClaim(claimId: string, claimName: string, description?: string): Claim {
    return { claimId, claimName, description };
  }
}
