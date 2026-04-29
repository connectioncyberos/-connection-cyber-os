import { GlobalContext } from "./context.types";

export class GlobalContextService {
  static buildContext(data: Partial<GlobalContext>): GlobalContext {
    return {
      environment: data.environment ?? "dev",
      module: data.module ?? "unknown",
      portal: data.portal,
      tenantId: data.tenantId,
      timestamp: new Date().toISOString()
    };
  }
}
