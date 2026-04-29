import crypto from "crypto";
import { CryptoConfig } from "./crypto.types";

export class CryptoService {
  static hash(data: string): string {
    return crypto.createHash("sha256").update(data).digest("hex");
  }

  static encrypt(data: string, config: CryptoConfig): string {
    const key = Buffer.from(config.key ?? "", "hex");
    const iv = Buffer.from(config.iv ?? "", "hex");

    const cipher = crypto.createCipheriv(config.algorithm, key, iv);
    let encrypted = cipher.update(data, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
  }

  static decrypt(data: string, config: CryptoConfig): string {
    const key = Buffer.from(config.key ?? "", "hex");
    const iv = Buffer.from(config.iv ?? "", "hex");

    const decipher = crypto.createDecipheriv(config.algorithm, key, iv);
    let decrypted = decipher.update(data, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  }
}
