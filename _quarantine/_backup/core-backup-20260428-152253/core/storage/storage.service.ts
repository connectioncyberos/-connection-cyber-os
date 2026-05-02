import { writeFileSync, readFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import { StorageConfig } from "./storage.types";

export class StorageService {
  static save(config: StorageConfig, filename: string, content: string | Buffer): void {
    const fullPath = join(config.path, filename);

    if (!existsSync(config.path)) {
      mkdirSync(config.path, { recursive: true });
    }

    writeFileSync(fullPath, content);
  }

  static load(config: StorageConfig, filename: string): Buffer {
    const fullPath = join(config.path, filename);
    return readFileSync(fullPath);
  }
}
