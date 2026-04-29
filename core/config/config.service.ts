import { GlobalConfig } from "./config.types";

export class ConfigService {
  private static configs: GlobalConfig[] = [];

  static set(config: GlobalConfig): void {
    this.configs.push(config);
  }

  static get(key: string, env?: string, module?: string, portal?: string): any {
    const match = this.configs.find(c =>
      c.key === key &&
      (!env || c.environment === env) &&
      (!module || c.module === module) &&
      (!portal || c.portal === portal)
    );

    return match?.value;
  }
}
