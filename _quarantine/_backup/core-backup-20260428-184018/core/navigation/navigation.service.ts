import { GlobalNavigationRule } from "./navigation.types";

export class GlobalNavigationService {
  static isRouteEnabled(rule: GlobalNavigationRule, env: string): boolean {
    if (rule.environment && rule.environment !== env) {
      return false;
    }
    return rule.enabled;
  }
}
