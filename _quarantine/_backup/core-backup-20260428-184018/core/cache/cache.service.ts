import { CacheEntry } from "./cache.types";

export class CacheService {
  private static cache: Map<string, CacheEntry> = new Map();

  static set(key: string, value: any, ttl?: number): void {
    const entry: CacheEntry = {
      key,
      value,
      ttl,
      createdAt: Date.now()
    };
    this.cache.set(key, entry);
  }

  static get(key: string): any {
    const entry = this.cache.get(key);
    if (!entry) return undefined;

    if (entry.ttl && Date.now() > entry.createdAt + entry.ttl) {
      this.cache.delete(key);
      return undefined;
    }

    return entry.value;
  }

  static delete(key: string): void {
    this.cache.delete(key);
  }
}
