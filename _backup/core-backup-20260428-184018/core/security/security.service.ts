import crypto from "crypto";
import { SecurityToken } from "./security.types";

export class SecurityService {
  static generateToken(payload: string): SecurityToken {
    const token = crypto.createHash("sha256").update(payload).digest("hex");
    return { token, expiresIn: 3600, algorithm: "sha256" };
  }

  static validateToken(token: string, payload: string): boolean {
    const expected = crypto.createHash("sha256").update(payload).digest("hex");
    return expected === token;
  }
}
