import { ProviderConfig } from "./providers.types";

export class ProvidersService {
  private static providers: ProviderConfig[] = [];

  static register(provider: ProviderConfig): void {
    this.providers.push(provider);
  }

  static get(providerName: string): ProviderConfig | undefined {
    return this.providers.find(p => p.provider === providerName);
  }
}
